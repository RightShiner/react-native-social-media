import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import constants from '../utils/constants';

const CustomButton = ({BackgroundColor, Name, TextColor, OnPress}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: BackgroundColor}]}
      onPress={() => OnPress()}>
      <Text style={[styles.buttonText, {color: TextColor}]}>{Name}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: '90%',
    backgroundColor: constants.Colors.Primary,
    alignSelf: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: constants.Screen.Moderate(15),
    color: constants.Colors.White,
    fontWeight: '600',
    width: '100%',
    textAlign: 'center',
    marginVertical: constants.Screen.Vertical(10),
  },
});
