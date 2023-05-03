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
import colors from '../../../styles/colors';

const dizi = [
  {
    id: 0,
    name: 'Cherry Cafe',
    image:
      'https://heytripster.com/wp-content/uploads/2020/05/the-best-restaurants-in-istanbul-min.jpg',
  },
  {
    id: 1,
    name: 'Cherry Cafe',
    image:
      'https://heytripster.com/wp-content/uploads/2020/05/the-best-restaurants-in-istanbul-min.jpg',
  },
  {
    id: 2,
    name: 'Cherry Cafe',
    image:
      'https://heytripster.com/wp-content/uploads/2020/05/the-best-restaurants-in-istanbul-min.jpg',
  },
  {
    id: 3,
    name: 'Cherry Cafe',
    image:
      'https://heytripster.com/wp-content/uploads/2020/05/the-best-restaurants-in-istanbul-min.jpg',
  },
  {
    id: 4,
    name: 'Cherry Cafe',
    image:
      'https://heytripster.com/wp-content/uploads/2020/05/the-best-restaurants-in-istanbul-min.jpg',
  },
  {
    id: 5,
    name: 'Aydin Coffe Shop Market Place',
    image:
      'https://heytripster.com/wp-content/uploads/2020/05/the-best-restaurants-in-istanbul-min.jpg',
  },
  {
    id: 6,
    name: 'Cherry Cafe',
    image:
      'https://heytripster.com/wp-content/uploads/2020/05/the-best-restaurants-in-istanbul-min.jpg',
  },
  {
    id: 7,
    name: 'Cherry Cafe',
    image:
      'https://heytripster.com/wp-content/uploads/2020/05/the-best-restaurants-in-istanbul-min.jpg',
  },
  {
    id: 8,
    name: 'Cherry Cafe',
    image:
      'https://heytripster.com/wp-content/uploads/2020/05/the-best-restaurants-in-istanbul-min.jpg',
  },
];

const PlacesCard = ({onPress}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  function renderPlaces({item}) {
    return (
      <View style={styles.info_container}>
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <Image style={styles.image} source={{uri: item.image}} />
          <View style={styles.active_circle} />
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

  const keyExtractor = item => {
    return item.id.toString();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dizi}
        numColumns={2}
        renderItem={renderPlaces}
        keyExtractor={keyExtractor}
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
