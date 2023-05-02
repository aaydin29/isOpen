import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const dizi = [
  {
    id: 0,
    name: 'Restaurant',
    image:
      'https://heytripster.com/wp-content/uploads/2020/05/the-best-restaurants-in-istanbul-min.jpg',
  },
  {
    id: 1,
    name: 'Hotels',
    image:
      'https://heytripster.com/wp-content/uploads/2020/05/the-best-restaurants-in-istanbul-min.jpg',
  },
  {
    id: 2,
    name: 'Museum',
    image:
      'https://heytripster.com/wp-content/uploads/2020/05/the-best-restaurants-in-istanbul-min.jpg',
  },
  {
    id: 3,
    name: 'Shopping Malls',
    image:
      'https://heytripster.com/wp-content/uploads/2020/05/the-best-restaurants-in-istanbul-min.jpg',
  },
  {
    id: 4,
    name: 'Libraries',
    image:
      'https://heytripster.com/wp-content/uploads/2020/05/the-best-restaurants-in-istanbul-min.jpg',
  },
];

const CategoryCard = ({navigation}) => {
  function handleSelectCategory() {
    navigation.navigate('NearPage');
  }
  return (
    <View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {dizi.map(d => (
          <View key={d.id} style={styles.info_container}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleSelectCategory}>
              <Image style={styles.image} source={{uri: d.image}} />
              <Text style={styles.category_name}>{d.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
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
    left: 25,
    fontSize: 20,
  },
});
