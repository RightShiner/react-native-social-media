import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import constants from '../utils/constants';
import AppStrings from '../utils/Strings';

const CustomBody = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.imageView}>
          <Image source={constants.Images.Black_Logo} style={styles.image} />
        </View>
        <View style={styles.headerView1}>
          <Text style={styles.headerText1}>{AppStrings.Therapist}</Text>
        </View>
      </View>

      <View style={styles.headerView2}>
        <Text onPress={onPress} style={styles.headerText2}>
          {AppStrings.Go_To_Admin_View}
        </Text>
        <Image source={constants.Images.Right_arrow} style={styles.icon} />
      </View>
    </View>
  );
};

export default CustomBody;

const styles = StyleSheet.create({
  container: {
    minHeight: constants.Screen.Vertical(10),
    marginHorizontal: 10,
    marginVertical: constants.Screen.Vertical(10),
    backgroundColor: constants.Colors.Pink,
    flexDirection: 'column',
    padding: constants.Screen.Moderate(20),
    borderRadius: 10,
  },

  container1: {
    flexDirection: 'row',
  },

  imageView: {
    height: 65,
    width: 65,
  },

  image: {
    height: 65,
    width: 65,
    resizeMode: 'cover',
  },

  headerView1: {
    flex: 1,
    color: constants.Colors.Black,
    fontFamily: constants.Fonts.ExtraBold,
    marginLeft: 20,
    marginTop: 13,
  },

  headerText1: {
    color: constants.Colors.Primary,
    fontFamily: constants.Fonts.Regular,
    fontSize: constants.Screen.Moderate(23),
    fontWeight: '500',
    fontFamily: constants.Fonts.ExtraBold,
    minHeight: constants.Screen.Vertical(20),
  },
  headerView2: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerText2: {
    color: constants.Colors.Black,
    fontFamily: constants.Fonts.Regular,
    fontWeight: '400',
    fontSize: constants.Screen.Moderate(12),
    minHeight: constants.Screen.Vertical(20),
  },
  icon: {
    height: 13,
    width: 18,
    color: constants.Colors.Black,
    marginTop: 3,
    marginHorizontal: 4,
  },
});
