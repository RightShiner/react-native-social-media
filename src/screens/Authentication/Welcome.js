import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import constants from '../../utils/constants';
import AppStrings from '../../utils/Strings';
import SplashScreen from 'react-native-splash-screen';

const Welcome = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Text */}
      <Text
        onPress={() => navigation.navigate('Login')}
        style={styles.headerText}>
        {AppStrings.Login2}
      </Text>

      {/* Main App Logo Image */}
      <Image source={constants.Images.Logo} style={styles.logo} />
      <Text style={styles.welcomeText}>{AppStrings.Welcome_Text}</Text>
      <Text style={styles.welcomeSubText}>{AppStrings.Welcome_Sub_Text}</Text>

      {/* Bottom Footer Buttons */}
      <View style={styles.footerView}>
        {/* Client SignUP */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signup', {props: 'client'})}>
          <Text style={styles.buttonText}>
            {AppStrings.Create_Client_Account}
          </Text>
        </TouchableOpacity>
        {/* Coach SignUp */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signup', {props: 'coach'})}>
          <Text style={[styles.buttonText, {color: constants.Colors.Primary}]}>
            {AppStrings.Create_Coach_Account}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.Colors.Primary,
  },
  headerText: {
    fontSize: constants.Screen.Moderate(15),
    color: constants.Colors.White,
    fontWeight: 'bold',
    width: '100%',
    // backgroundColor: 'red',
    textAlign: 'right',
    paddingHorizontal: 20,
    marginVertical: constants.Screen.Vertical(20),
  },
  button: {
    width: '90%',
    backgroundColor: constants.Colors.White,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: constants.Screen.Vertical(5),
  },
  buttonText: {
    fontSize: constants.Screen.Moderate(15),
    color: constants.Colors.Black,
    fontWeight: '600',
    width: '100%',
    textAlign: 'center',
    marginVertical: constants.Screen.Vertical(10),
  },
  logo: {
    height: 400,
    width: 400,
    alignSelf: 'center',
    // backgroundColor: 'red',
  },
  welcomeText: {
    fontSize: constants.Screen.Moderate(25),
    color: constants.Colors.White,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    marginVertical: constants.Screen.Vertical(10),
  },
  welcomeSubText: {
    fontSize: constants.Screen.Moderate(15),
    color: constants.Colors.White,
    fontWeight: '600',
    width: '100%',
    textAlign: 'center',
    marginVertical: constants.Screen.Vertical(5),
  },
  footerView: {
    //   backgroundColor: 'red',
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
});
