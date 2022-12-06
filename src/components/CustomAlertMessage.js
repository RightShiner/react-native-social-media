import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import constants from '../utils/constants';
import CustomButton from './CustomButton';
import AppStrings from '../utils/Strings';

const CustomAlertMessage = ({message, onPress}) => {
  const [isModalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(false);
  };

  return (
    <Modal isVisible={isModalVisible} animationIn={'fadeIn'}>
      <View style={styles.container}>
        <View
          style={[
            styles.imageView,
            {backgroundColor: constants.Colors.Transparent},
          ]}>
          <Image source={constants.Images.Logo} style={[styles.image]} />
        </View>
        <Text style={styles.header}>{message}</Text>
        <CustomButton
          BackgroundColor={constants.Colors.Primary}
          Name={AppStrings.Okay}
          TextColor={constants.Colors.White}
          OnPress={() => {
            onPress();
          }}
        />
      </View>
    </Modal>
  );
};

export default CustomAlertMessage;

const styles = StyleSheet.create({
  container: {
    minHeight: constants.Screen.Vertical(200),
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: constants.Colors.White,
    borderRadius: 25,
    padding: constants.Screen.Moderate(20),
  },
  header: {
    color: constants.Colors.Black,
    fontFamily: constants.Fonts.ExtraBold,
    width: '85%',
    textAlign: 'center',
    marginVertical: constants.Screen.Vertical(20),
    fontSize: constants.Screen.Moderate(18),
    fontFamily: '400',
  },
  description: {
    fontSize: constants.Screen.Moderate(16),
    color: constants.Colors.Light_Grey2,
    fontFamily: constants.Fonts.Regular,
    width: '90%',
    textAlign: 'center',
    minHeight: constants.Screen.Vertical(40),
    marginBottom: constants.Screen.Vertical(10),
  },
  imageView: {
    height: 50,
    width: 50,
    backgroundColor: constants.Colors.Dark_Blue,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
  },
});
