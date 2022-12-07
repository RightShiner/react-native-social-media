import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import CustomStatusBar from '../../components/CustomStatusBar';
import constants from '../../utils/constants';

const Directory = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <CustomStatusBar BGColor={constants.Colors.Primary} />
      <Text style={{color: 'black', fontSize: 25}}>Directory</Text>
    </SafeAreaView>
  );
};

export default Directory;

const styles = StyleSheet.create({});
