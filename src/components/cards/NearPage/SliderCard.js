import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import React, {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {useSelector, useDispatch} from 'react-redux';

import {addFilteredPlaces} from '../../../context/reducers';

const SliderCard = () => {
  const [userLocation, setUserLocation] = useState();
  const [km, setKm] = useState(2.5);
  const placeList = useSelector(state => state.placeList);
  const selectedCategory = useSelector(state => state.selectedCategory);
  const dispatch = useDispatch();

  const selectedCategoryData = placeList[selectedCategory];

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
    if (userLocation && selectedCategoryData) {
      const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Earth's radius in km
        const dLat = toRadians(lat2 - lat1);
        const dLon = toRadians(lon2 - lon1);
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRadians(lat1)) *
            Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        return distance;
      };

      const toRadians = angle => {
        return (angle * Math.PI) / 180;
      };

      const calculateDistances = () => {
        return selectedCategoryData.map(place => {
          const distance = calculateDistance(
            userLocation.latitude,
            userLocation.longitude,
            place.geometry?.location?.lat,
            place.geometry?.location?.lng,
          );

          return {
            ...place,
            distance: distance,
          };
        });
      };

      const distances = calculateDistances();

      const filteredPlaces = distances.filter(({distance}) => {
        return distance <= km;
      });

      dispatch(addFilteredPlaces(filteredPlaces));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLocation, selectedCategoryData, km]);

  const onSliderValueChange = value => {
    setKm(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.km_text}>{km} km</Text>
      <Slider
        style={styles.slider}
        value={km}
        step={0.5}
        minimumValue={0.5}
        maximumValue={5}
        onValueChange={onSliderValueChange}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#fff"
      />
    </View>
  );
};

export default SliderCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    marginBottom: 15,
  },
  km_text: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
    margin: 10,
  },
  slider: {
    width: '100%',
    height: 30,
  },
});
