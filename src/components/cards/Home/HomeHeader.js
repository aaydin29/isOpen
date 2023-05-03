import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

import {Menu, Search} from '../../icons';

const HomeHeader = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <Menu style={styles.menu} />
      </TouchableOpacity>
      <TextInput
        placeholder="Search place..."
        style={styles.textInput}
        placeholderTextColor="white"
      />
      <Search style={styles.searchIcon} />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 45,
  },
  menu: {
    marginLeft: 23,
  },
  textInput: {
    height: 42,
    width: 299,
    marginLeft: 22,
    borderRadius: 10,
    backgroundColor: 'rgba(217, 217, 217, 0.2)',
    paddingLeft: 15,
  },
  searchIcon: {
    right: 26,
    position: 'absolute',
  },
});
