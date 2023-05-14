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
import {useDispatch, useSelector} from 'react-redux';

import {addPlace, selectCategory} from '../../../context/reducers';
import Loading from '../../Loading/Loading';

const CategoryCard = ({navigation}) => {
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const placeList = useSelector(state => state.placeList);

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

  function HandleSelectCategory(item) {
    setLoading(true);
    const categoryData = placeList?.[item.category];
    if (categoryData) {
      setLoading(false);
      navigation.navigate('NearPage', {
        category: item.category,
        places: categoryData,
      });
    } else {
      const lat = userLocation.latitude;
      const lng = userLocation.longitude;
      const radius = 10000;

      axios
        .get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
          params: {
            location: `${lat},${lng}`,
            radius: radius,
            type: item.apiType,
            key: Config.API_KEY,
          },
        })
        .then(response => {
          const places = response.data.results;
          dispatch(addPlace({category: item.category, place: places}));
          dispatch(selectCategory(item.category));
          setLoading(false);
          navigation.navigate('NearPage', {
            category: item.category,
            places: places,
          });
        })
        .catch(error => {
          console.log('An error occurred:', error);
        });
    }
  }

  if (loading) {
    return <Loading />;
  }

  function renderCategories({item}) {
    return (
      <View style={styles.info_container}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => HandleSelectCategory(item)}>
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
    marginTop: 10,
    flex: 9,
    width: '100%',
    height: '100%',
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
    apiType: 'lodging',
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
    apiType: 'movie_theater',
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
