import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import constants from '../utils/constants';

const CustomLoader = ({loaderData}) => {
  const [isModalVisible, setModalVisible] = useState(true);

  useEffect(() => {}, []);

  return (
    <Modal
      isVisible={isModalVisible}
      style={styles.constainer}
      animationIn={'flash'}>
      <ActivityIndicator
        color={constants.Colors.Primary}
        size={Platform.OS === 'android' ? 77 : 'large'}
      />
      {/* <Text style={styles.text}>{strings('Please_Wait')}</Text> */}
    </Modal>
  );
};

export default CustomLoader;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontFamily: constants.Fonts.Regular,
    fontSize: constants.Screen.Moderate(16),
    color: constants.Colors.White,
    marginVertical: constants.Screen.Vertical(10),
  },
});
