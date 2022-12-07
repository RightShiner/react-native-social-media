import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import constants from '../utils/constants';
import AppStrings from '../utils/Strings';

const CustomMessageButton = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.text}>{AppStrings.Message}</Text>
      </View>
      <View style={styles.iconView}>
        <Image source={constants.Images.Send_Mail} style={styles.icon} />
      </View>
    </View>
  );
};

export default CustomMessageButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: constants.Colors.Gray,
    marginVertical: constants.Screen.Vertical(20),
    marginHorizontal: constants.Screen.Vertical(10),
    flexDirection: 'row',
    backgroundColor: constants.Colors.White,
  },
  text: {
    marginVertical: constants.Screen.Vertical(10),
    marginLeft: 20,
    fontSize: constants.Screen.Moderate(18),
  },

  iconView: {
    marginHorizontal: constants.Screen.Vertical(20),
    marginVertical: constants.Screen.Vertical(10),
    height: 30,
    width: 30,
    justifyContent: 'flex-end',
  },
  icon: {
    height: 30,
    width: 30,
    tintColor: constants.Colors.Primary,
  },
});
