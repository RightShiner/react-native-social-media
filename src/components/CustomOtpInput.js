import {StyleSheet} from 'react-native';
import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import constants from '../utils/constants';

const CustomOtpInput = ({Code, onChangeOTP, onCodeFilled}) => {
  return (
    <OTPInputView
      style={styles.otpView}
      pinCount={4}
      code={Code}
      onCodeChanged={code => onChangeOTP(code)}
      autoFocusOnLoad={true}
      codeInputFieldStyle={styles.underlineStyleBase}
      codeInputHighlightStyle={styles.underlineStyleHighLighted}
      onCodeFilled={code => onCodeFilled(code)}
      keyboardType={'number-pad'}
    />
  );
};

export default CustomOtpInput;

const styles = StyleSheet.create({
  otpView: {
    width: '80%',
    height: constants.Screen.Vertical(80),
    // backgroundColor: 'red',
    alignSelf: 'center',
    padding: 15,
  },
  underlineStyleBase: {
    width: 50,
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: constants.Colors.Gray,
    fontSize: constants.Screen.Moderate(18),
    color: constants.Colors.Primary,
  },
  underlineStyleHighLighted: {
    width: 50,
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: constants.Colors.Gray,
    fontSize: constants.Screen.Moderate(18),
    color: constants.Colors.Primary,
  },
});
