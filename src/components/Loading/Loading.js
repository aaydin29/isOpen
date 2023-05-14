import {StyleSheet, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Lottie source={require('../../assets/lottie/loading.json')} autoPlay />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
});
