import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Blog = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black', fontSize: 25}}>Blog</Text>
    </View>
  );
};

export default Blog;

const styles = StyleSheet.create({});
