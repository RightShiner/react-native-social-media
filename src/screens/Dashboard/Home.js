import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import CustomBody from '../../components/CustomBody';

const Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <CustomHeader />
      <CustomBody onPress={() => {}} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
