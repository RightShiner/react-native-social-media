import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import CustomBody from '../../components/CustomBody';
import {useSelector} from 'react-redux';
import CustomStatusBar from '../../components/CustomStatusBar';
import constants from '../../utils/constants';

const Home = ({navigation}) => {
  const UserData = useSelector(e => e?.UserDataReducer?.user_details);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <CustomStatusBar BGColor={constants.Colors.Primary} />
      <CustomHeader />
      <CustomBody onPress={() => {}} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
