import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {useSelector, useDispatch} from 'react-redux';
import {onToggleSwitch} from '../../../context/reducers';

const FavHeader = () => {
  const toggleSwitch = useSelector(state => state.toggleSwitch);
  const dispatch = useDispatch();

  function handleToggle() {
    dispatch(onToggleSwitch(!toggleSwitch));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>Favorites</Text>
      <ToggleSwitch
        isOn={toggleSwitch}
        onColor="#00BF63"
        offColor="gray"
        size="small"
        onToggle={handleToggle}
      />
    </View>
  );
};

export default FavHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 55,
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderColor: 'white',
    paddingBottom: 15,
  },
  header_text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
    marginLeft: 50,
    paddingBottom: 5,
  },
});
