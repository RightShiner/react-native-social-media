import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Chat = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black', fontSize: 25}}>Chat</Text>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
