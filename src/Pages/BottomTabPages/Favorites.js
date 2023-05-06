import {StyleSheet, View, StatusBar} from 'react-native';
import React, {useState} from 'react';
import FavHeader from '../../components/cards/Favorites/FavHeader';
import colors from '../../styles/colors';
import FavPlacesCard from '../../components/cards/Favorites/FavPlacesCard';
import PlacesModal from '../../components/modals/PlacesModal';

const Favorites = () => {
  const [modalVisible, setModalVisible] = useState(false);

  function handlePlaceSelect() {
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
      />
      <FavHeader />
      <FavPlacesCard onPress={handlePlaceSelect} />
      <PlacesModal isVisible={modalVisible} onClose={handlePlaceSelect} />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.koyuGri,
    flex: 1,
  },
});
