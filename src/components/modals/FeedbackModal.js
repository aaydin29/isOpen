import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Collapsible from 'react-native-collapsible';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';

import colors from '../../styles/colors';
import {feedbackVisible} from '../../context/reducers';

const FeedbackModal = ({isVisible, onClose}) => {
  const [isCollapsible, setIsCollapsible] = useState(false);
  const dispatch = useDispatch();

  function handleCollapsible() {
    setIsCollapsible(!isCollapsible);
  }

  function onSend() {
    showMessage({
      message: 'Your message has been sent successfully! Thanks for feedback.',
      type: 'success',
      floating: true,
    });
    setIsCollapsible(false);
    dispatch(feedbackVisible(false));
  }
  function onClear() {}

  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      swipeDirection="left"
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <Image
          style={styles.logo_image}
          source={require('../../assets/logo/isOpenLogo.png')}
        />
        <TouchableOpacity onPress={handleCollapsible}>
          <Text style={styles.text}>Give feedback or report error!</Text>
        </TouchableOpacity>
        <Collapsible collapsed={!isCollapsible} style={styles.collapsible}>
          <View style={styles.input_container}>
            <TextInput
              style={styles.text_input}
              placeholder="Write your message here..."
              placeholderTextColor="white"
              multiline
            />
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity style={styles.clear} onPress={onClear}>
              <Text style={styles.button_text}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.send} onPress={onSend}>
              <Text style={styles.button_text}>Send</Text>
            </TouchableOpacity>
          </View>
        </Collapsible>
      </View>
    </Modal>
  );
};

export default FeedbackModal;

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    position: 'absolute',
    top: 95,
    left: 0,
    flex: 1,
  },
  container: {
    width: 349,
    height: 175,
    backgroundColor: colors.koyuGri,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  logo_image: {
    width: 180,
    height: 69,
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    color: colors.acikGri,
    alignSelf: 'center',
  },
  input_container: {
    alignSelf: 'center',
    width: 283,
    height: 122,
    backgroundColor: 'rgba(211, 211, 211, 0.4)',
    borderRadius: 10,
    marginTop: 15,
  },
  text_input: {
    marginHorizontal: 15,
    color: 'white',
  },
  collapsible: {
    backgroundColor: colors.koyuGri,
    borderBottomRightRadius: 10,
    paddingBottom: 15,
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 26.5,
  },
  clear: {
    backgroundColor: '#FF9900',
    width: 81,
    height: 27,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    marginTop: 12,
  },
  send: {
    backgroundColor: colors.logoGreen,
    width: 81,
    height: 27,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    marginTop: 12,
  },
  button_text: {
    color: colors.beyaz,
    fontWeight: '500',
    fontSize: 16,
  },
});
