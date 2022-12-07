import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import constants from '../utils/constants';
import AppStrings from '../utils/Strings';

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>{AppStrings.Social_Media}</Text>
        </View>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>{AppStrings.Case_Management}</Text>
        </View>
      </View>
      <View style={styles.imageView}>
        <Image source={constants.Images.Black_Logo} style={[styles.image]} />
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    minHeight: constants.Screen.Vertical(10),
    width: '100%',
    alignItems: 'center',
    backgroundColor: constants.Colors.Primary,
    padding: constants.Screen.Moderate(10),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container1: {flexDirection: 'column'},
  headerView: {
    color: constants.Colors.Black,
    fontFamily: constants.Fonts.ExtraBold,
    width: '100%',
  },
  headerText: {
    fontSize: constants.Screen.Moderate(15),
    color: constants.Colors.White,
    fontFamily: constants.Fonts.Regular,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: constants.Fonts.ExtraBold,
    minHeight: constants.Screen.Vertical(15),
  },
  imageView: {
    marginLeft: 10,
  },
  image: {
    height: 60,
    width: 60,
    resizeMode: 'cover',
    borderRadius: 100,
  },
});
