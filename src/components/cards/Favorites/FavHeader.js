import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';

const FavHeader = () => {
  const [toggleSwitch, setToggleSwitch] = useState(false);

  function handleToggle() {
    setToggleSwitch(!toggleSwitch);
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
