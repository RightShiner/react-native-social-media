import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const UserData = useSelector(e => e?.UserDataReducer?.user_details);
  console.log('User Data: ', UserData);

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black', fontSize: 25}}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
