import {StyleSheet, View, StatusBar} from 'react-native';
import React, {useState} from 'react';

import colors from '../../styles/colors';
import HomeHeader from '../../components/cards/Home/HomeHeader';
import CategoryCard from '../../components/cards/Home/CategoryCard';
import FeedbackModal from '../../components/modals/FeedbackModal';

const Home = ({navigation}) => {
  const [feedbackModalVisible, setFeedbackModalVisible] = useState(false);

  function handleMenu() {
    setFeedbackModalVisible(!feedbackModalVisible);
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
      />
      <HomeHeader onPress={handleMenu} />
      <CategoryCard navigation={navigation} />
      <FeedbackModal isVisible={feedbackModalVisible} onClose={handleMenu} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.koyuGri,
    flex: 1,
  },
});
