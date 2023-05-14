import React, {useRef} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';

import colors from '../../styles/colors';
import {Search} from '../icons';
import {selectPlace, modalVisible} from '../../context/reducers';

const SearchBar = () => {
  const dispatch = useDispatch();
  const InputRef = useRef(null);

  function handleClearText() {
    InputRef.current.clear();
  }

  return (
    <View style={styles.container}>
      <Search style={styles.searchIcon} />
      <GooglePlacesAutocomplete
        ref={InputRef}
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
        textInputProps={{
          placeholderTextColor: 'white',
        }}
      />
      <TouchableOpacity
        style={styles.x_container}
        activeOpacity={0.5}
        onPress={handleClearText}>
        <Text style={styles.x}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 55,
  },
  searchIcon: {
    position: 'absolute',
    left: 30,
    top: 9,
  },
  x_container: {
    position: 'absolute',
    flex: 1,
    right: 70,
    top: 6,
    alignItems: 'center',
    width: 25,
  },
  x: {
    color: colors.beyaz,
    fontSize: 13,
    marginTop: 6,
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
      paddingLeft: 37,
      color: 'white',
      paddingRight: 35,
    },
    listView: {
      backgroundColor: 'white',
      borderRadius: 5,
      borderColor: '#e0e0e0',
      position: 'absolute',
      top: 50,
    },
    row: {
      borderColor: '#e0e0e0',
      margin: 5,
      marginLeft: 0,
    },
  },
});

export default SearchBar;
