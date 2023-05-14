import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import Config from 'react-native-config';
import {useSelector} from 'react-redux';

import colors from '../../../styles/colors';

const PlacesCard = ({onPress}) => {
  const [refreshing, setRefreshing] = useState(false);
  const toggleSwitch = useSelector(state => state.toggleSwitch);
  const filteredPlaces = useSelector(state => state.filteredPlaces);

  let dataToShow = toggleSwitch
    ? filteredPlaces.filter(item => item.opening_hours?.open_now)
    : filteredPlaces;

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  function renderPlaces({item}) {
    let photoUrl = null;

    if (item.photos && item.photos.length > 0) {
      photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${item.photos[0].photo_reference}&key=${Config.API_KEY}`;
    }

    let activeCircleColor = colors.starOrange;

    if (item.opening_hours) {
      activeCircleColor = item.opening_hours.open_now
        ? (activeCircleColor = colors.openGreen)
        : (activeCircleColor = colors.closeRed);
    }

    return (
      <View style={styles.info_container}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => onPress(item)}>
          {photoUrl ? (
            <Image style={styles.image} source={{uri: photoUrl}} />
          ) : (
            <Image
              style={styles.image}
              source={require('../../../assets/CategoryImages/defaultPlaces.png')}
            />
          )}
          <View
            style={[styles.active_circle, {backgroundColor: activeCircleColor}]}
          />
          <View style={styles.back_text} />
          <Text
            style={styles.places_name}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={dataToShow}
        numColumns={2}
        renderItem={renderPlaces}
        keyExtractor={item => item.place_id}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.koyuGri]}
            progressBackgroundColor="#D3D3D366"
            progressViewOffset={-30}
          />
        }
      />
    </View>
  );
};

export default PlacesCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  info_container: {
    marginBottom: 31,
    width: 144,
    marginHorizontal: 20,
  },
  image: {
    width: 144,
    height: 154,
    borderRadius: 10,
  },
  active_circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    position: 'absolute',
    backgroundColor: colors.openGreen,
    right: 7,
    top: 7,
  },
  back_text: {
    backgroundColor: 'white',
    width: '100%',
    position: 'absolute',
    padding: 4,
    bottom: 0,
    height: 30,
    opacity: 0.5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  places_name: {
    position: 'absolute',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 4,
    bottom: 0,
    flex: 1,
    height: 30,
    fontSize: 15,
    color: colors.koyuGri,
    fontWeight: 'bold',
    marginHorizontal: 2,
  },
});
