import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import colors from '../../styles/colors';
import {HeartWhite, Star} from '../icons';

const imageURL =
  'https://heytripster.com/wp-content/uploads/2020/05/the-best-restaurants-in-istanbul-min.jpg';

const PlacesModal = ({isVisible, onClose}) => {
  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.nameAndheart}>
          <Text style={styles.places_name}>Aydin Restaurant</Text>
          <HeartWhite style={styles.heart_icon} />
        </View>
        <View style={styles.catAndrating}>
          <Text style={styles.category}>Restaurant</Text>
          <View style={styles.ratings_container}>
            <Star style={styles.star_icon} />
            <Text style={styles.rating}>4.8</Text>
            <Text style={styles.ratingCounter}>(155)</Text>
          </View>
        </View>
        <View style={styles.kmAndactive}>
          <Text style={styles.km}>1.2 km</Text>
          <View style={styles.circle} />
          <Text style={styles.active}>Open now (Close at 11 pm)</Text>
        </View>
        <View style={styles.adress_container}>
          <Text style={styles.adress}>
            Adress: 768 Mill Ave.Randolph, MA 023683768 Mill Ave.Randolph, MA
            02368
          </Text>
        </View>
        <View style={styles.image_container}>
          <Image style={styles.big_image} source={{uri: imageURL}} />
          <View style={styles.inner_image_container}>
            <Image style={styles.small_image} source={{uri: imageURL}} />
            <Image style={styles.small_image2} source={{uri: imageURL}} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PlacesModal;

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: colors.koyuGri,
    width: '100%',
    height: deviceSize.height / 2.03,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: colors.acikGri,
  },
  nameAndheart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    padding: 10,
    paddingTop: 20,
  },
  places_name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.acikGri,
  },
  heart_icon: {},
  catAndrating: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 26,
    padding: 6,
  },
  category: {
    fontSize: 16,
    color: colors.acikGri,
    flex: 2,
  },
  ratings_container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
  },
  star_icon: {
    marginRight: 5,
    fontSize: 16,
  },
  rating: {
    color: colors.acikGri,
    marginRight: 5,
    fontSize: 16,
  },
  ratingCounter: {
    color: colors.acikGri,
    fontSize: 16,
  },
  kmAndactive: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    paddingHorizontal: 26,
  },
  km: {
    flex: 1,
    fontSize: 16,
    color: colors.acikGri,
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: colors.openGreen,
    marginRight: 5,
  },
  active: {
    fontSize: 16,
    marginRight: 30,
    color: colors.acikGri,
  },
  adress_container: {
    paddingHorizontal: 26,
    padding: 6,
  },
  adress: {
    fontSize: 16,
    color: colors.acikGri,
  },
  image_container: {
    flexDirection: 'row',
    height: 209,
    paddingTop: 10,
    paddingBottom: 21,
    paddingHorizontal: 26,
  },
  big_image: {
    width: 166,
    height: 171,
    borderRadius: 10,
  },
  inner_image_container: {
    marginLeft: 20,
  },
  small_image: {
    width: 139,
    height: 78,
    marginBottom: 14,
    borderRadius: 10,
  },
  small_image2: {
    width: 139,
    height: 78,
    borderRadius: 10,
  },
});
