import {StyleSheet, View} from 'react-native';
import React from 'react';
import FavHeader from '../../components/cards/Favorites/FavHeader';
import colors from '../../styles/colors';
import FavPlacesCard from '../../components/cards/Favorites/FavPlacesCard';

const Favorites = () => {
  return (
    <View style={styles.container}>
      <FavHeader />
      <FavPlacesCard />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.koyuGri,
    flex: 1,
  },
});
