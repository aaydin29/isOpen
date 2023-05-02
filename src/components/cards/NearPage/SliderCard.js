import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Slider from '@react-native-community/slider';
import React, {useState} from 'react';

const SliderCard = () => {
  const [km, setKm] = useState(2.5);

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

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  km_text: {
    marginBottom: 15,
    fontSize: 15,
    color: 'white',
  },
  slider: {
    width: deviceSize.width / 1.1,
  },
});
