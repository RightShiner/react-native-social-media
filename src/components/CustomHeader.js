import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import constants from '../utils/constants';
import AppStrings from '../utils/Strings';

const CustomHeader = ({props, onPress, onPress1}) => {
  return (
    <View
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 14,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 19,
      }}>
      {props === 1 && (
        <View style={styles.container}>
          <View style={styles.container1}>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>{AppStrings.Social_Media}</Text>
            </View>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>
                {AppStrings.Case_Management}
              </Text>
            </View>
          </View>
          <View style={styles.imageView}>
            <Image
              source={constants.Images.Black_Logo}
              style={[styles.image]}
            />
          </View>
        </View>
      )}

      {props === 2 && (
        <View style={styles.container}>
          <View style={styles.iconView}>
            <Image
              source={constants.Images.Left_arrow}
              style={styles.icon}
              onPress={onPress}
            />

            <Text style={styles.headerText1}>
              {AppStrings.Activity_Category_Name}
            </Text>
          </View>
        </View>
      )}

      {props === 3 && (
        <View style={styles.container}>
          <View style={styles.iconView}>
            <Image
              source={constants.Images.Left_arrow}
              style={styles.icon}
              onPress={onPress}
            />

            <Text style={styles.headerText1}>{AppStrings.Chat}</Text>
            <Image
              source={constants.Images.LogOut}
              style={styles.icon1}
              onPress1={onPress1}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    minHeight: constants.Screen.Vertical(20),
    width: '100%',
    alignItems: 'center',
    backgroundColor: constants.Colors.Primary,
    padding: constants.Screen.Moderate(10),
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 10,
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
  iconView: {
    flexDirection: 'row',
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText1: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '600',
    color: constants.Colors.White,
    fontSize: 25,
  },
  icon: {width: 38, height: 30, margin: 10},
  icon1: {width: 25, height: 25, margin: 10},
});
