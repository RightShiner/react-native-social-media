import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Profile = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black', fontSize: 25}}>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
