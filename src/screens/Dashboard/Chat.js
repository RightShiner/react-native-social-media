import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';

import {useDispatch, useSelector} from 'react-redux';
import {setLogout} from '../../redux/userDataReducer';
import CustomMessageButton from '../../components/CustomMessageButton';
const Chat = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <CustomHeader
        props={3}
        OnPress1={() => {
          dispatch(setLogout());
          navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
          });
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View style={styles.button}>
          <CustomMessageButton />
        </View>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
