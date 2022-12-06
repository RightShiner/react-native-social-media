import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AppStrings from '../utils/Strings';
import constants from '../utils/constants';

const CustomBackCompnent = ({navigation, name, backLogo, marginVertical}) => {
  return (
    <View
      style={[
        styles.container,
        {marginVertical: marginVertical ? marginVertical : 0},
      ]}>
      <TouchableOpacity
        onPress={() => (navigation ? navigation.goBack() : '')}
        style={styles.backView}>
        <Image source={backLogo ? backLogo : ''} style={styles.backImage} />
      </TouchableOpacity>
      <View style={styles.textView}>
        <Text style={[styles.headerText, name !== '' ? {} : {}]}>
          {name ? name : ''}
        </Text>
      </View>
      <View style={styles.lastView}></View>
    </View>
  );
};

export default CustomBackCompnent;

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
  },
  headerText: {
    fontSize: constants.Screen.Moderate(20),
    color: constants.Colors.Black,
    fontWeight: '500',
    width: '100%',
    textAlign: 'center',
  },
  textView: {
    flex: 0.7,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backImage: {
    height: 45,
    width: 45,
    resizeMode: 'cover',
    tintColor: constants.Colors.Gray,
    // backgroundColor: 'red',
  },
  backView: {
    flex: 0.15,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastView: {
    flex: 0.15,
    // backgroundColor: 'orange',
  },
});
