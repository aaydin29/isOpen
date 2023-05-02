import {StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';
import NearHeader from '../../components/cards/NearPage/NearHeader';
import SliderCard from '../../components/cards/NearPage/SliderCard';
import PlacesCard from '../../components/cards/NearPage/PlacesCard';

const NearPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <NearHeader navigation={navigation} />
      <SliderCard />
      <PlacesCard />
    </View>
  );
};

export default NearPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.koyuGri,
    flex: 1,
  },
});
