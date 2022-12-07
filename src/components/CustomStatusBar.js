import {StyleSheet, Text, View, StatusBar, Platform} from 'react-native';
import React from 'react';
import constants from '../utils/constants';
import {SafeAreaView} from 'react-native';

const CustomStatusBar = ({BGColor}) => {
  const STATUSBAR_HEIGHT = StatusBar.currentHeight;
  const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

  const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[{height: STATUSBAR_HEIGHT}, {backgroundColor}]}>
      <SafeAreaView>
        <StatusBar
          translucent
          backgroundColor={backgroundColor}
          {...props}
          hidden={false}
          networkActivityIndicatorVisible={true}
        />
      </SafeAreaView>
    </View>
  );

  return <MyStatusBar backgroundColor={BGColor} barStyle="light-content" />;
};

export default CustomStatusBar;

const styles = StyleSheet.create({});
