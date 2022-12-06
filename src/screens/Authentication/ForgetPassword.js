import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import constants from '../../utils/constants';
import AppStrings from '../../utils/Strings';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import CustomBackCompnent from '../../components/CustomBackCompnent';
import CustomOtpInput from '../../components/CustomOtpInput';

const ForgetPassword = ({navigation, route}) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [flag, setFlag] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');

  // For hide button when keyboard appears and show button when keyboard dismiss
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {}, [flag]);

  const onCodeFilled = code => {
    console.log(`Code is ${code}, you are good to go!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <CustomBackCompnent
        navigation={navigation}
        name={''}
        backLogo={constants.Images.Back_Arrow_Circle}
        marginVertical={constants.Screen.Vertical(10)}
      />

      {/* Header Text */}
      <Text style={styles.headerText}>
        {flag === 1
          ? AppStrings.Forget_Password2
          : flag === 2
          ? AppStrings.Enter_Four_Digit_Code
          : AppStrings.Reset_Password}
      </Text>

      {/* Header Text */}
      <Text style={styles.headerText2}>
        {flag === 1
          ? AppStrings.Forget_Password_Header
          : flag === 2
          ? AppStrings.Four_Digit_Code_Header
          : AppStrings.Reset_Password_Header}
      </Text>

      {/* Form Fields */}
      <View style={styles.loginView}>
        {flag === 1 ? (
          <CustomTextInput
            labelEnable={true}
            labelText={AppStrings.Email}
            Placeholder={AppStrings.Enter_Email}
            KeyboardType={'email-address'}
            SecureTextEntry={false}
            onTextChange={text => setEmail(text)}
            Value={email}
          />
        ) : flag === 2 ? (
          <CustomOtpInput
            Code={otp}
            onChangeOTP={otp => setOTP(otp)}
            onCodeFilled={otp => onCodeFilled(otp)}
          />
        ) : (
          <>
            <CustomTextInput
              labelEnable={true}
              labelText={AppStrings.New_Password}
              Placeholder={AppStrings.Enter_New_Password}
              SecureTextEntry={true}
              onTextChange={text => setPassword(text)}
              Value={password}
            />
            <CustomTextInput
              labelEnable={true}
              labelText={AppStrings.Re_New_Password}
              Placeholder={AppStrings.Re_Enter_New_Password}
              SecureTextEntry={true}
              onTextChange={text => setRePassword(text)}
              Value={repassword}
            />
          </>
        )}
      </View>

      {/* Keyboard Handler for show and hide footer button */}
      {keyboardStatus ? (
        <></>
      ) : (
        <View style={styles.footerView}>
          <CustomButton
            BackgroundColor={constants.Colors.Primary}
            Name={
              flag === 1
                ? AppStrings.Send
                : flag === 2
                ? AppStrings.Verify
                : AppStrings.Update_Passeword
            }
            TextColor={constants.Colors.White}
            OnPress={() =>
              flag === 3 ? navigation.goBack() : setFlag(flag + 1)
            }
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.Colors.White,
  },
  headerText: {
    fontSize: constants.Screen.Moderate(20),
    color: constants.Colors.Black,
    fontWeight: 'bold',
    width: '100%',
    // backgroundColor: 'red',
    textAlign: 'center',
    marginTop: constants.Screen.Vertical(0),
  },
  headerText2: {
    fontSize: constants.Screen.Moderate(16),
    color: constants.Colors.Black,
    fontWeight: '500',
    width: '90%',
    // backgroundColor: 'red',
    textAlign: 'center',
    marginTop: constants.Screen.Vertical(50),
    alignSelf: 'center',
  },
  footerText: {
    fontSize: constants.Screen.Moderate(15),
    color: constants.Colors.Gray,
    fontWeight: 'bold',
    width: '100%',
    // backgroundColor: 'red',
    textAlign: 'center',
    marginVertical: constants.Screen.Vertical(20),
  },
  button: {
    width: '90%',
    backgroundColor: constants.Colors.Primary,
    alignSelf: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: constants.Screen.Moderate(15),
    color: constants.Colors.White,
    fontWeight: '600',
    width: '100%',
    textAlign: 'center',
    marginVertical: constants.Screen.Vertical(10),
  },
  loginView: {
    justifyContent: 'center',
    marginTop: constants.Screen.Vertical(70),
    marginBottom: constants.Screen.Vertical(40),
  },
  footerView: {
    width: '100%',
  },
  textInput: {
    fontSize: constants.Screen.Moderate(15),
    color: constants.Colors.White,
    width: '90%',
    marginVertical: constants.Screen.Vertical(10),
    // backgroundColor: 'red',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: constants.Colors.Gray,
    paddingHorizontal: 15,
  },
  label: {
    fontSize: constants.Screen.Moderate(15),
    color: constants.Colors.Black,
    width: '90%',
    // backgroundColor: 'yellow',
    alignSelf: 'center',
  },
});
