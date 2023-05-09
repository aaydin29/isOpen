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

    return (
      <View style={styles.render_container}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => onPress(item)}>
          <Image style={styles.image} source={{uri: photoUrl}} />
          <View style={styles.info_container}>
            <View style={styles.nameAndcircle}>
              <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                {item.name}
              </Text>
              <View style={styles.circle} />
            </View>
            <View style={styles.catAndrating}>
              <Text style={styles.category}>{item.types[0]}</Text>
              <Star style={styles.star} />
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
            <Text style={styles.km}>1.2 km</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  const keyExtractor = (item, index) => {
    return item.place_id;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favoritePlacesArray}
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
    marginBottom: 4,
  },
  nameAndcircle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.acikGri,
    flex: 1,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: colors.openGreen,
    marginRight: 3,
  },
  catAndrating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
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
