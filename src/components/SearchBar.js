import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Search} from './icons';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';

import {selectPlace, modalVisible} from '../context/reducers';

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search place..."
        styles={styles.input}
        fetchDetails
        onPress={(data, details = null) => {
          dispatch(selectPlace(details));
          dispatch(modalVisible(true));
        }}
        query={{
          key: Config.API_KEY,
          language: 'en',
        }}
      />
      <Search style={styles.searchIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    position: 'absolute',
    right: 70,
    top: 10,
  },
  input: {
    container: {
      marginRight: 63,
    },
    textInput: {
      height: 42,
      width: 299,
      marginLeft: 22,
      borderRadius: 10,
      backgroundColor: 'rgba(217, 217, 217, 0.2)',
      paddingLeft: 15,
      color: 'white',
    },
    listView: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#e0e0e0',
      marginTop: 5,
    },
    row: {
      padding: 10,
      borderBottomWidth: 1,
      borderRadius: 10,
      borderColor: '#e0e0e0',
    },
  },
});

export default SearchBar;
