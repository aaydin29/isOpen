import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import Config from 'react-native-config';
import axios from 'axios';

const CategoryCard = ({navigation}) => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Kullanıcının konumunu al
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setUserLocation({latitude, longitude});
      },
      error => {
        console.log('An error occured!:', error);
      },
    );
  }, []);

  function handleSelectCategory(item) {
    const {latitude, longitude} = userLocation;
    const radius = 10000; // 10 km

    axios
      .get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
        params: {
          location: `${latitude},${longitude}`,
          radius: radius,
          type: item.apiType,
          key: Config.API_KEY,
        },
      })
      .then(response => {
        const places = response.data.results;
        navigation.navigate('NearPage', {
          category: item.category,
          places: places,
        });
      })
      .catch(error => {
        console.log('An error occurred:', error);
      });
  }

  function renderCategories({item}) {
    return (
      <View style={styles.info_container}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleSelectCategory(item)}>
          <Image style={styles.image} source={item.image} />
          <Text style={styles.category_name}>{item.category}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={placesData}
        renderItem={renderCategories}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 27,
    marginBottom: 80,
  },
  info_container: {
    marginBottom: 21,
    alignSelf: 'center',
    borderRadius: 10,
    width: 360,
  },
  image: {
    width: 360,
    height: 165,
    borderRadius: 10,
    opacity: 0.8,
  },
  category_name: {
    color: 'white',
    position: 'absolute',
    bottom: 7,
    left: 10,
    fontSize: 20,
  },
});

const placesData = [
  {
    id: 0,
    category: 'Restaurant',
    apiType: 'restaurant',
    image: require('../../../assets/CategoryImages/restaurants.jpg'),
  },
  {
    id: 1,
    category: 'Cafe',
    apiType: 'cafe',
    image: require('../../../assets/CategoryImages/cafes.jpg'),
  },
  {
    id: 2,
    category: 'Hotel',
    apiType: 'lodging', // Otel
    image: require('../../../assets/CategoryImages/hotels.jpg'),
  },
  {
    id: 3,
    category: 'Supermarket',
    apiType: 'supermarket',
    image: require('../../../assets/CategoryImages/supermarkets.jpg'),
  },
  {
    id: 4,
    category: 'Museum',
    apiType: 'museum',
    image: require('../../../assets/CategoryImages/museums.jpg'),
  },
  {
    id: 5,
    category: 'Park',
    apiType: 'park',
    image: require('../../../assets/CategoryImages/parks.jpg'),
  },
  {
    id: 6,
    category: 'Cinema',
    apiType: 'movie_theater', // Sinema
    image: require('../../../assets/CategoryImages/cinemas.jpg'),
  },
  {
    id: 7,
    category: 'Shopping Mall',
    apiType: 'shopping_mall',
    image: require('../../../assets/CategoryImages/shopping-malls.jpg'),
  },
  {
    id: 8,
    category: 'Gym',
    apiType: 'gym',
    image: require('../../../assets/CategoryImages/gyms.jpg'),
  },
  {
    id: 9,
    category: 'Bar',
    apiType: 'bar',
    image: require('../../../assets/CategoryImages/bars.jpg'),
  },
  {
    id: 10,
    category: 'ATM',
    apiType: 'atm',
    image: require('../../../assets/CategoryImages/atms.jpg'),
  },
];
