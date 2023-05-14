import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';

import {Menu} from '../../icons';
import SearchBar from '../../SearchBar/SearchBar';

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
    flex: 1,
    width: '100%',
  },
  menu: {
    marginLeft: 18,
    marginBottom: 8,
  },
});
