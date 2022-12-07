import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Directory = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black', fontSize: 25}}>Directory</Text>
    </View>
  );
};

export default Directory;

const styles = StyleSheet.create({});
