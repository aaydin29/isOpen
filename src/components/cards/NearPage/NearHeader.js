import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {useSelector, useDispatch} from 'react-redux';

import {onToggleSwitch} from '../../../context/reducers';
import {Back} from '../../icons';

const NearHeader = ({navigation, category}) => {
  const toggleSwitch = useSelector(state => state.toggleSwitch);
  const dispatch = useDispatch();

  function handleToggle() {
    dispatch(onToggleSwitch(!toggleSwitch));
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack}>
        <Back />
      </TouchableOpacity>
      <Text style={styles.header_text}>Near {category}s</Text>
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

export default NearHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 55,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderColor: 'white',
    paddingBottom: 15,
  },
  header_text: {
    color: 'white',
    fontSize: 20,
    marginLeft: 30,
    marginRight: 20,
    paddingBottom: 5,
  },
});
