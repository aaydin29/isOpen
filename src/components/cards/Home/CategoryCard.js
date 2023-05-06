import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';

const placesData = [
  {
    id: 0,
    category: 'Restaurant',
    image: require('../../../assets/CategoryImages/restaurants.jpg'),
  },
  {
    id: 1,
    category: 'Cafe',
    image: require('../../../assets/CategoryImages/cafes.jpg'),
  },
  {
    id: 2,
    category: 'Hotel',
    image: require('../../../assets/CategoryImages/hotels.jpg'),
  },
  {
    id: 3,
    category: 'Supermarket',
    image: require('../../../assets/CategoryImages/supermarkets.jpg'),
  },
  {
    id: 4,
    category: 'Museum',
    image: require('../../../assets/CategoryImages/museums.jpg'),
  },
  {
    id: 5,
    category: 'Park',
    image: require('../../../assets/CategoryImages/parks.jpg'),
  },
  {
    id: 6,
    category: 'Cinema',
    image: require('../../../assets/CategoryImages/cinemas.jpg'),
  },
  {
    id: 7,
    category: 'Shopping Mall',
    image: require('../../../assets/CategoryImages/shopping-malls.jpg'),
  },
  {
    id: 8,
    category: 'Gym',
    image: require('../../../assets/CategoryImages/gyms.jpg'),
  },
  {
    id: 9,
    category: 'Bar',
    image: require('../../../assets/CategoryImages/bars.jpg'),
  },
];
const CategoryCard = ({navigation}) => {
  function handleSelectCategory() {
    navigation.navigate('NearPage');
  }

  function renderCategories({item}) {
    return (
      <View style={styles.info_container}>
        <TouchableOpacity activeOpacity={0.7} onPress={handleSelectCategory}>
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
