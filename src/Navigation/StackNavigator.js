import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Authentication/Welcome';
import Signup from '../screens/Authentication/Signup';
import ProfileSetup from '../screens/Authentication/ProfileSetup';
import Login from '../screens/Authentication/Login';
import ForgetPassword from '../screens/Authentication/ForgetPassword';
import TabNavigator from './BottomTabNavigator';
import BackgroundInformation from '../screens/Authentication/BackgroundInformation';
import ImpactSocialMedia from '../screens/Authentication/ImpactSocialMedia';

const StackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen
        name="BackgroundInformation"
        component={BackgroundInformation}
      />
      <Stack.Screen name="ImpactSocialMedia" component={ImpactSocialMedia} />
      <Stack.Screen name="ProfileSetup" component={ProfileSetup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
