import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import SearchBar from '../../SearchBar';
import {Menu} from '../../icons';

const HomeHeader = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <Menu style={styles.menu} />
      </TouchableOpacity>
      <SearchBar />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 45,
  },
  menu: {
    marginLeft: 23,
    marginRight: -10,
  },
});
