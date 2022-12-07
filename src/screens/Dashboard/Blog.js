import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import CustomStatusBar from '../../components/CustomStatusBar';
import constants from '../../utils/constants';

const Blog = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <CustomStatusBar BGColor={constants.Colors.Primary} />
      <Text style={{color: 'black', fontSize: 25}}>Blog</Text>
    </SafeAreaView>
  );
};

export default Blog;

const styles = StyleSheet.create({});
