import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import CustomBody from '../../components/CustomBody';
import {useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const UserData = useSelector(e => e?.UserDataReducer?.user_details);
  console.log('User Data: ', UserData);

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
