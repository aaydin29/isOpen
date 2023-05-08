import {StyleSheet, View, StatusBar} from 'react-native';
import React, {useState} from 'react';
import colors from '../../styles/colors';
import NearHeader from '../../components/cards/NearPage/NearHeader';
import SliderCard from '../../components/cards/NearPage/SliderCard';
import PlacesCard from '../../components/cards/NearPage/PlacesCard';
import PlacesModal from '../../components/modals/PlacesModal';
import {selectPlace} from '../../context/reducers';
import {useDispatch} from 'react-redux';

const NearPage = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const {category, places} = route.params;

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
      <NearHeader navigation={navigation} category={category} />
      <SliderCard />
      <PlacesCard places={places} onPress={handleSelect} />
      <PlacesModal isVisible={modalVisible} onClose={handleClose} />
    </View>
  );
};

export default NearPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.koyuGri,
    flex: 1,
  },
});
