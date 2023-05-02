import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';

import {Back} from '../../icons';

const NearHeader = ({navigation}) => {
  const [toggleSwitch, setToggleSwitch] = useState(false);

  function handleToggle() {
    setToggleSwitch(!toggleSwitch);
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack}>
        <Back style={styles.back_icon} />
      </TouchableOpacity>
      <Text style={styles.header_text}>Near Restaurants</Text>
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
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderColor: 'white',
    paddingBottom: 15,
  },
  back_icon: {},
  header_text: {
    color: 'white',
    fontSize: 20,
    marginLeft: 50,
    marginRight: 20,
    paddingBottom: 5,
  },
});
