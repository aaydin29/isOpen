import {StyleSheet, View, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {modalVisible, feedbackVisible} from '../../context/reducers';
import colors from '../../styles/colors';
import HomeHeader from '../../components/cards/Home/HomeHeader';
import CategoryCard from '../../components/cards/Home/CategoryCard';
import FeedbackModal from '../../components/modals/FeedbackModal';
import PlacesModal from '../../components/modals/PlacesModal';

const Home = ({navigation}) => {
  const [placesModalVisible, setPlacesModalVisible] = useState(false);
  const dispatch = useDispatch();
  const placesVisible = useSelector(state => state.modalVisible);
  const feedbackModalVisible = useSelector(state => state.feedbackModalVisible);

  useEffect(() => {
    setPlacesModalVisible(placesVisible);
  }, [placesVisible]);

  function handleMenu() {
    dispatch(feedbackVisible(true));
  }

  function handleClosePlace() {
    dispatch(modalVisible(false));
  }

  function handleFeedbackClose() {
    dispatch(feedbackVisible(false));
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
      />

      <View style={styles.category_container}>
        <CategoryCard navigation={navigation} />
      </View>
      <View style={styles.header_container}>
        <HomeHeader onPress={handleMenu} />
      </View>
      <FeedbackModal
        isVisible={feedbackModalVisible}
        onClose={handleFeedbackClose}
      />
      <PlacesModal isVisible={placesModalVisible} onClose={handleClosePlace} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.koyuGri,
    flex: 1,
  },
  header_container: {
    flex: 1,
    position: 'absolute',
  },
  category_container: {
    flex: 1,
    marginTop: 100,
  },
});
