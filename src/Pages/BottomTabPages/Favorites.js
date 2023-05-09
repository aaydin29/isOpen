import {StyleSheet, View, StatusBar} from 'react-native';
import React, {useState} from 'react';
import FavHeader from '../../components/cards/Favorites/FavHeader';
import colors from '../../styles/colors';
import FavPlacesCard from '../../components/cards/Favorites/FavPlacesCard';
import PlacesModal from '../../components/modals/PlacesModal';
import {useDispatch} from 'react-redux';
import {selectPlace} from '../../context/reducers';

const Favorites = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  function handleSelect(item) {
    dispatch(selectPlace(item));
    setModalVisible(!modalVisible);
  }

  function handleClose() {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
      />
      <FavHeader />
      <FavPlacesCard onPress={handleSelect} />
      <PlacesModal isVisible={modalVisible} onClose={handleClose} />
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
