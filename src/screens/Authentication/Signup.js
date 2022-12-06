import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import constants from '../../utils/constants';
import AppStrings from '../../utils/Strings';
import CustomBackCompnent from '../../components/CustomBackCompnent';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import {PostApi} from '../../Services/api.service';
import {SIGNUP} from '../../Services/ApiURL';
import CustomLoader from '../../components/CustomLoader';
import CustomAlertMessage from '../../components/CustomAlertMessage';

const Signup = ({navigation, route}) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
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

  const signUpApiCall = () => {
    setLoader(true);
    const signUpData = new FormData();
    signUpData.append('email', email);
    signUpData.append('password', password);
    signUpData.append('name', name);
    signUpData.append('role', 1);
    console.log('signUp Data: ', signUpData);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    };
    //console.log('signUp Config: ', config);
    PostApi(SIGNUP, signUpData, config)
      .then(response => {
        setLoader(false);
        console.log('SignUp Response: ', response);
        if (response?.message === 'The profile image field is required.') {
          route?.params?.props
            ? route?.params?.props === 'client'
              ? navigation.navigate('BackgroundInformation', {
                  props: route?.params?.props ? route?.params?.props : '',
                })
              : navigation.navigate('ProfileSetup', {
                  props: route?.params?.props ? route?.params?.props : '',
                  email: email,
                  password: password,
                  name: name,
                })
            : '';
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
      {/* Custom Header */}
      <CustomBackCompnent
        navigation={navigation}
        name={''}
        backLogo={constants.Images.Back_Arrow_Circle}
        marginVertical={constants.Screen.Vertical(10)}
      />

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

      {/* Header Text */}
      <Text style={styles.headerText}>
        {route?.params?.props
          ? route?.params?.props === 'client'
            ? AppStrings.Client_SignUp
            : AppStrings.Create_Coach_Account2
          : ''}
      </Text>

      {/* Form Fields */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
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
        <CustomTextInput
          labelEnable={true}
          labelText={AppStrings.Full_Name}
          Placeholder={AppStrings.Enter_Full_Name}
          SecureTextEntry={false}
          onTextChange={text => setName(text)}
          Value={name}
        />
      </View>

      {/* Keyboard Handler for show and hide footer button */}
      {keyboardStatus ? (
        <></>
      ) : (
        <View style={styles.footerView}>
          <CustomButton
            BackgroundColor={constants.Colors.Primary}
            Name={AppStrings.SignUp}
            TextColor={constants.Colors.White}
            OnPress={() => {
              route?.params?.props
                ? route?.params?.props === 'client'
                  ? navigation.navigate('BackgroundInformation', {
                      props: route?.params?.props ? route?.params?.props : '',
                    })
                  : signUpApiCall()
                : '';
            }}
          />
          <Text
            onPress={() => navigation.navigate('Login')}
            style={styles.footerText}>
            {AppStrings.Already_Have_Account}
          </Text>
        </View>
      )}
      <Image source={constants.Images.Logo} style={styles.logo} />
    </SafeAreaView>
  );
};

export default Signup;

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
  footerView: {
    //   backgroundColor: 'red',
    position: 'absolute',
    bottom: 80,
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
    marginBottom: constants.Screen.Vertical(10),
    // backgroundColor: 'red',
  },
});
