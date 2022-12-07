import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import constants from '../utils/constants';
import AppStrings from '../utils/Strings';

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>
          {AppStrings.Social_Media_Case_Management}
        </Text>
      </View>
      <View style={styles.imageView}>
        <Image source={constants.Images.Logo} style={[styles.image]} />
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
    padding: constants.Screen.Moderate(5),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerView: {
    color: constants.Colors.Black,
    fontFamily: constants.Fonts.ExtraBold,
    width: '65%',
  },
  headerText: {
    fontSize: constants.Screen.Moderate(16),
    color: constants.Colors.White,
    fontFamily: constants.Fonts.Regular,
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: constants.Screen.Moderate(23),
    fontWeight: '700',
    fontFamily: '700',
    minHeight: constants.Screen.Vertical(20),
    // marginBottom: constants.Screen.Vertical(10),
  },
  imageView: {
    // height: 50,
    // width: 10,
    backgroundColor: constants.Colors.Dark_Blue,
    borderRadius: 50,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
  },
});
