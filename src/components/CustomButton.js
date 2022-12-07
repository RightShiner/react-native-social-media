import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import constants from '../utils/constants';

const CustomButton = ({
  BackgroundColor,
  Name,
  TextColor,
  OnPress,
  logo,
  tintColor,
  borderColor,
  customWidth,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: BackgroundColor},
        logo
          ? {borderColor: borderColor, borderWidth: 1, width: customWidth}
          : {},
      ]}
      onPress={() => OnPress()}>
      {logo ? (
        <Image
          source={logo}
          style={[styles.buttonLogo, {tintColor: tintColor}]}
        />
      ) : (
        <></>
      )}
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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: constants.Screen.Moderate(15),
    color: constants.Colors.White,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: constants.Screen.Vertical(10),
  },
  buttonLogo: {
    height: 25,
    width: 25,
    resizeMode: 'cover',
    marginHorizontal: 10,
  },
});
