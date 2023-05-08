import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import colors from '../../styles/colors';
import Geolocation from '@react-native-community/geolocation';

import {useSelector} from 'react-redux';
import {HeartWhite, Star} from '../icons';
import Config from 'react-native-config';

const PlacesModal = ({isVisible, onClose}) => {
  const selectedPlace = useSelector(state => state.selectedPlace);
  const [userLocation, setUserLocation] = useState(null);
  const [distance, setDistance] = useState('Calculating...');

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

  console.log(userLocation);

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
    <>
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
              <Text style={styles.places_name}>{selectedPlace.name}</Text>
              <HeartWhite style={styles.heart_icon} />
            </View>
            <View style={styles.catAndrating}>
              <Text style={styles.category}>{selectedPlace.types[0]}</Text>
              <View style={styles.ratings_container}>
                <Star style={styles.star_icon} />
                <Text style={styles.rating}>{selectedPlace.rating}</Text>
                <Text style={styles.ratingCounter}>
                  ({selectedPlace.user_ratings_total})
                </Text>
              </View>
            </View>
            <View style={styles.kmAndactive}>
              <Text style={styles.km}>{distance}</Text>
              <View
                style={[styles.circle, {backgroundColor: activeCircleColor}]}
              />

              <Text style={styles.active}>{activeText}</Text>
            </View>
            <View style={styles.adress_container}>
              <Text style={styles.adress}>
                Adress: {selectedPlace.vicinity}
              </Text>
            </View>
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
          </View>
        </Modal>
      )}
    </>
  );
};

export default PlacesModal;

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: colors.koyuGri,
    width: '100%',
    height: deviceSize.height / 2.03,
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
  },
  heart_icon: {},
  catAndrating: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 26,
    padding: 6,
  },
  category: {
    fontSize: 16,
    color: colors.acikGri,
    flex: 2,
  },
  ratings_container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
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
  kmAndactive: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    paddingHorizontal: 26,
  },
  km: {
    flex: 1,
    fontSize: 16,
    color: colors.acikGri,
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
  adress_container: {
    paddingHorizontal: 26,
    padding: 6,
  },
  adress: {
    fontSize: 16,
    color: colors.acikGri,
  },
  image_container: {
    flexDirection: 'row',
    height: 209,
    paddingTop: 10,
    paddingBottom: 21,
    paddingHorizontal: 26,
  },
  big_image: {
    width: 166,
    height: 171,
    borderRadius: 10,
  },
  inner_image_container: {
    marginLeft: 20,
  },
  small_image: {
    width: 139,
    height: 78,
    marginBottom: 14,
    borderRadius: 10,
  },
  small_image2: {
    width: 139,
    height: 78,
    borderRadius: 10,
  },
});
