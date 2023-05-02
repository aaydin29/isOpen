import {StyleSheet, View, StatusBar} from 'react-native';
import React from 'react';

import colors from '../../styles/colors';
import HomeHeader from '../../components/cards/Home/HomeHeader';
import CategoryCard from '../../components/cards/Home/CategoryCard';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
      />
      <HomeHeader />
      <CategoryCard navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.koyuGri,
    flex: 1,
  },
});
