import {
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import {useSelector} from 'react-redux';
import Config from 'react-native-config';

import colors from '../../../styles/colors';
import {Star} from '../../icons';

const FavPlacesCard = ({onPress}) => {
  const [refreshing, setRefreshing] = useState(false);
  const toggleSwitch = useSelector(state => state.toggleSwitch);
  const favoritePlaces = useSelector(state => state.favoritePlaces);
  const favoritePlacesArray = Object.values(favoritePlaces);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  function renderPlaces({item}) {
    let photoUrl = null;

    if (item?.photos && item?.photos?.length > 0) {
      photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${item?.photos[0].photo_reference}&key=${Config.API_KEY}`;
    }

    let activeCircleColor = colors.starOrange;

    if (item.opening_hours) {
      if (item.opening_hours.open_now === true) {
        activeCircleColor = colors.openGreen;
      } else if (item.opening_hours.open_now === false) {
        activeCircleColor = colors.closeRed;
      }
    }

    let distanceText = '';

    if (item.distance < 1) {
      const meters = item.distance * 1000;
      distanceText = meters.toFixed(0) + ' m';
    } else {
      distanceText = (Math.floor(item.distance * 10) / 10).toFixed(1) + ' km';
    }

    return (
      <View style={styles.render_container}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => onPress(item)}>
          <Image style={styles.image} source={{uri: photoUrl}} />
          <View style={styles.info_container}>
            <View style={styles.nameAndcircle}>
              <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                {item.name}
              </Text>
              <View
                style={[
                  styles.active_circle,
                  {backgroundColor: activeCircleColor},
                ]}
              />
            </View>
            <View style={styles.catAndrating}>
              <Text
                style={styles.category}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.types[0].charAt(0).toUpperCase() + item.types[0].slice(1)}
              </Text>
              <Star style={styles.star} />
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
            <Text style={styles.km}>{distanceText}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  const keyExtractor = item => {
    return item.place_id;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={
          toggleSwitch
            ? favoritePlacesArray.filter(
                item => item.opening_hours && item.opening_hours.open_now,
              )
            : favoritePlacesArray
        }
        numColumns={2}
        renderItem={renderPlaces}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        style={styles.flatlist}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.koyuGri]}
            progressBackgroundColor="#D3D3D366"
          />
        }
      />
    </View>
  );
};

export default FavPlacesCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  flatlist: {
    paddingTop: 31,
  },
  render_container: {
    width: 154,
    borderRadius: 10,
    marginBottom: 31,
    backgroundColor: 'rgba(211, 211, 211, 0.15)',
    padding: 8,
    marginHorizontal: 14,
  },
  info_container: {
    paddingHorizontal: 2,
  },
  image: {
    width: 138,
    height: 128,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 3,
  },
  nameAndcircle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    marginTop: 3,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.acikGri,
    flex: 1,
  },
  active_circle: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: colors.openGreen,
    marginRight: 3,
    marginLeft: 5,
  },
  catAndrating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  category: {
    flex: 3,
    color: colors.acikGri,
  },
  star: {
    flex: 1,
  },
  rating: {
    flex: 1,
    marginLeft: 5,
    color: colors.acikGri,
  },
  km: {
    color: colors.acikGri,
    fontWeight: '500',
  },
});
