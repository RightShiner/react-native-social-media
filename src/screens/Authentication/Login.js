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
import {PostApi} from '../../Services/api.service';
import {LOGIN} from '../../Services/ApiURL';
import CustomLoader from '../../components/CustomLoader';
import CustomAlertMessage from '../../components/CustomAlertMessage';

const Login = ({navigation}) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

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

  const loginApiCall = () => {
    setLoader(true);
    const loginData = new FormData();
    loginData.append('email', email);
    loginData.append('password', password);
    console.log('login Data: ', loginData);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    };
    //console.log('login Config: ', config);
    PostApi(LOGIN, loginData, config)
      .then(response => {
        setLoader(false);
        console.log('login Response: ', response);
        if (response?.status !== 0) {
          navigation.reset({
            index: 0,
            routes: [{name: 'TabNavigator'}],
          });
        } else {
          setErrorMessage(response?.message);
          setVisible(true);
        }
      })
      .catch(error => {
        setLoader(false);
        console.log('Error: ', error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Text */}
      <Text style={styles.headerText}>{AppStrings.Login}</Text>

      {/* Custom Loader for API Call */}
      {loader ? <CustomLoader /> : <></>}

      {/* Custom Loader for API Call */}
      {visible ? (
        <CustomAlertMessage
          message={errorMessage}
          onPress={() => setVisible(false)}
        />
      ) : (
        <></>
      )}

      {/* Form Fields */}
      <View style={styles.loginView}>
        <CustomTextInput
          labelEnable={true}
          labelText={AppStrings.Email}
          Placeholder={AppStrings.Enter_Email}
          KeyboardType={'email-address'}
          SecureTextEntry={false}
          onTextChange={text => setEmail(text)}
          Value={email}
        />
        <CustomTextInput
          labelEnable={true}
          labelText={AppStrings.Password}
          Placeholder={AppStrings.Enter_Password}
          SecureTextEntry={true}
          onTextChange={text => setPassword(text)}
          Value={password}
        />
      </View>

      {/* Keyboard Handler for show and hide footer button */}
      {keyboardStatus ? (
        <></>
      ) : (
        <View style={styles.footerView}>
          <CustomButton
            BackgroundColor={constants.Colors.Primary}
            Name={AppStrings.Login}
            TextColor={constants.Colors.White}
            OnPress={() => {
              loginApiCall();
            }}
          />
          <Text
            onPress={() => {
              navigation.navigate('ForgetPassword');
            }}
            style={styles.footerText}>
            {AppStrings.Forget_Password}
          </Text>
          <Text
            onPress={() => navigation.navigate('Welcome')}
            style={styles.footerText}>
            {AppStrings.Not_Have_Account}
          </Text>
        </View>
      )}
      <Image source={constants.Images.Logo} style={styles.logo} />
    </SafeAreaView>
  );
};

export default Login;

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
    marginTop: constants.Screen.Vertical(50),
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
  logo: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    // backgroundColor: 'red',
    position: 'absolute',
    bottom: 10,
  },
});
