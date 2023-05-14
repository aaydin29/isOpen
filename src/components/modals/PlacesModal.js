import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, Fragment} from 'react';
import Modal from 'react-native-modal';
import colors from '../../styles/colors';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch, useSelector} from 'react-redux';
import {addFavoritePlace, removeFavoritePlace} from '../../context/reducers';
import {HeartWhite, Star, HeartRed} from '../icons';
import Config from 'react-native-config';

const PlacesModal = ({isVisible, onClose}) => {
  const [userLocation, setUserLocation] = useState(null);
  const [distance, setDistance] = useState('Calculating...');

  const favoritePlaces = useSelector(state => state.favoritePlaces);
  const selectedPlace = useSelector(state => state.selectedPlace);
  const dispatch = useDispatch();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setUserLocation({latitude, longitude});
      },
      error => {
        console.log('An error occurred:', error);
      },
    );
  }, []);

  useEffect(() => {
    if (userLocation) {
      function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371;
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(deg2rad(lat1)) *
            Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;

        if (distance >= 1) {
          return (Math.floor(distance * 10) / 10).toFixed(1) + ' km';
        } else {
          const meters = distance * 1000;
          return meters.toFixed(0) + ' m';
        }
      }

      function deg2rad(deg) {
        return deg * (Math.PI / 180);
      }

      const lat1 = selectedPlace?.geometry?.location?.lat;
      const lon1 = selectedPlace?.geometry?.location?.lng;
      const lat2 = userLocation?.latitude;
      const lon2 = userLocation?.longitude;

      const KM = calculateDistance(lat1, lon1, lat2, lon2);
      setDistance(KM);
    }
  }, [
    selectedPlace?.geometry?.location?.lat,
    selectedPlace?.geometry?.location?.lng,
    userLocation,
  ]);

  const handleAddFavorites = () => {
    if (isFavorite()) {
      dispatch(removeFavoritePlace(selectedPlace.place_id));
    } else {
      dispatch(addFavoritePlace(selectedPlace));
    }
  };

  const isFavorite = () => {
    return favoritePlaces.some(
      place => place.place_id === selectedPlace.place_id,
    );
  };

  const renderHeartIcon = () => {
    if (isFavorite()) {
      return <HeartRed style={styles.heart_icon} />;
    } else {
      return <HeartWhite style={styles.heart_icon} />;
    }
  };

  let photoUrl = null;

  if (selectedPlace?.photos && selectedPlace?.photos?.length > 0) {
    photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${selectedPlace.photos[0].photo_reference}&key=${Config.API_KEY}`;
  }

  let activeCircleColor = colors.starOrange;
  let activeText = 'Unknown';

  if (selectedPlace?.opening_hours) {
    if (selectedPlace?.opening_hours?.open_now === true) {
      activeCircleColor = colors.openGreen;
      activeText = 'Open now';
    } else if (selectedPlace?.opening_hours?.open_now === false) {
      activeCircleColor = colors.closeRed;
      activeText = 'Close now';
    }
  }

  return (
    <Fragment>
      {selectedPlace && (
        <Modal
          style={styles.modal}
          isVisible={isVisible}
          swipeDirection="down"
          onSwipeComplete={onClose}
          onBackdropPress={onClose}
          onBackButtonPress={onClose}>
          <View style={styles.container}>
            <View style={styles.nameAndheart}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.places_name}>
                {selectedPlace.name}
              </Text>
              <TouchableOpacity onPress={handleAddFavorites}>
                {renderHeartIcon()}
              </TouchableOpacity>
            </View>
            <View style={styles.bottom_container}>
              <View style={styles.image_container}>
                {photoUrl ? (
                  <Image style={styles.big_image} source={{uri: photoUrl}} />
                ) : (
                  <Image
                    style={styles.big_image}
                    source={require('../../assets/CategoryImages/defaultPlaces.png')}
                  />
                )}
              </View>
              <View style={styles.infos_container}>
                <Text style={styles.adress}>
                  Adress: {selectedPlace.vicinity}
                </Text>
                <Text style={styles.category}>{selectedPlace.types[0]}</Text>
                <View style={styles.ratings_container}>
                  <Star style={styles.star_icon} />
                  <Text style={styles.rating}>{selectedPlace.rating}</Text>
                  <Text style={styles.ratingCounter}>
                    ({selectedPlace.user_ratings_total})
                  </Text>
                </View>
                <View style={styles.active_container}>
                  <View
                    style={[
                      styles.circle,
                      {backgroundColor: activeCircleColor},
                    ]}
                  />
                  <Text style={styles.active}>{activeText}</Text>
                </View>
                <Text style={styles.km}>{distance}</Text>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </Fragment>
  );
};

export default PlacesModal;

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    flex: 1,
  },
  container: {
    backgroundColor: colors.koyuGri,
    width: '100%',
    height: deviceSize.height / 2.7,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: colors.acikGri,
  },
  nameAndheart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    padding: 10,
    paddingTop: 20,
  },

  places_name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.acikGri,
    flex: 1,
    marginRight: 10,
  },
  heart_icon: {
    flex: 1,
    marginRight: 5,
  },
  bottom_container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  image_container: {
    marginLeft: 15,
    marginBottom: 10,
  },
  big_image: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  infos_container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 5,
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
  },
  adress: {
    fontSize: 16,
    color: colors.acikGri,
    marginBottom: 10,
  },
  category: {
    fontSize: 16,
    color: colors.acikGri,
  },
  ratings_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  star_icon: {
    marginRight: 5,
    fontSize: 16,
  },
  rating: {
    color: colors.acikGri,
    marginRight: 5,
    fontSize: 16,
  },
  ratingCounter: {
    color: colors.acikGri,
    fontSize: 16,
  },
  active_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  km: {
    fontSize: 16,
    color: colors.acikGri,
    marginBottom: 10,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: colors.openGreen,
    marginRight: 5,
  },
  active: {
    fontSize: 16,
    marginRight: 30,
    color: colors.acikGri,
  },
});
