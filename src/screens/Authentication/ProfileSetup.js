import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  Image,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import constants from '../../utils/constants';
import AppStrings from '../../utils/Strings';
import CustomBackCompnent from '../../components/CustomBackCompnent';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PostApi} from '../../Services/api.service';
import {SIGNUP} from '../../Services/ApiURL';
import CustomLoader from '../../components/CustomLoader';
import CustomAlertMessage from '../../components/CustomAlertMessage';

const ProfileSetup = ({navigation, route}) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [image, setImage] = useState('');
  const [number, setNumber] = useState('');
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

  const showCamera = value => {
    if (Platform.OS == 'android') {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ])
        .then(result => {
          if (
            result['android.permission.CAMERA'] == 'granted' &&
            result['android.permission.WRITE_EXTERNAL_STORAGE'] == 'granted'
          ) {
            if (value === 1) {
              // openCamera();
            } else {
              openGallery();
            }
          } else {
            //console.log('Result Error: ', result);
          }
        })
        .catch(reason => {
          //console.log('Reason: ', reason);
        });
    } else {
      if (value === 1) {
        // openCamera();
      } else {
        openGallery();
      }
    }
  };

  const openGallery = () =>
    launchImageLibrary(
      {
        mediaType: 'photo',
        presentationStyle: 'fullScreen',
        quality: 1,
        includeBase64: true,
      },
      response => {
        if (response.errorCode) return;
        if (response.didCancel) return;
        setImage(response);
      },
    );

  const profileSetupApiCall = () => {
    setLoader(true);
    const profileSetupData = new FormData();
    profileSetupData.append('email', route?.params?.email);
    profileSetupData.append('password', route?.params?.password);
    profileSetupData.append('name', route?.params?.name);
    profileSetupData.append('role', 1);
    profileSetupData.append(
      'profile_image',
      image?.assets
        ? {
            uri: image?.assets[0]?.uri,
            name: image?.assets[0]?.fileName,
            type: image?.assets[0]?.type,
          }
        : null,
    );
    profileSetupData.append('phone_no', number);
    console.log('profileSetup Data: ', profileSetupData);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    };
    console.log('profileSetup Config: ', config);
    PostApi(SIGNUP, profileSetupData, config)
      .then(response => {
        setLoader(false);
        console.log('profileSetup Response: ', response);
        if (response?.status !== 0) {
          navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
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
      <ScrollView
        style={{
          marginBottom: keyboardStatus
            ? constants.Screen.Vertical(50)
            : constants.Screen.Vertical(0),
        }}
        showsVerticalScrollIndicator={false}>
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
        <Text style={styles.headerText}>{AppStrings.Profile_Steup}</Text>

        {/* Form Fields */}
        <View style={styles.headerView}>
          <Text style={styles.label}>{AppStrings.Profile_Picture}</Text>

          {/* Image View */}
          <View style={styles.imageView}>
            <TouchableOpacity onPress={() => showCamera(2)}>
              <Image
                source={
                  image !== ''
                    ? {uri: image?.assets[0]?.uri}
                    : constants.Images.Add
                }
                style={image !== '' ? styles.profileImage : styles.addIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: constants.Screen.Vertical(25)}} />
          <CustomTextInput
            labelEnable={true}
            labelText={AppStrings.Phone_Number}
            Placeholder={AppStrings.Enter_Phone_Number}
            KeyboardType={'numeric'}
            SecureTextEntry={false}
            onTextChange={text => setNumber(text)}
            Value={number}
            MaxLength={10}
          />
        </View>
      </ScrollView>

      {/* Keyboard Handler for show and hide footer  button */}
      {keyboardStatus ? (
        <></>
      ) : (
        <>
          <View style={styles.footerView}>
            <CustomButton
              BackgroundColor={constants.Colors.Primary}
              Name={AppStrings.Complete_Setup}
              TextColor={constants.Colors.White}
              OnPress={() => {
                profileSetupApiCall();
                // navigation.reset({
                //   index: 0,
                //   routes: [{name: 'Login'}],
                // });
              }}
            />
          </View>
          <Image source={constants.Images.Logo} style={styles.logo} />
        </>
      )}
    </SafeAreaView>
  );
};

export default ProfileSetup;

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
    bottom: 150,
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
  headerView: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: constants.Screen.Vertical(40),
    //   backgroundColor: 'red',
  },
  imageView: {
    width: constants.Screen.Vertical(290),
    height: constants.Screen.Vertical(200),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: constants.Colors.Gray,
    borderRadius: 10,
    marginVertical: constants.Screen.Vertical(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    height: 50,
    width: 50,
    resizeMode: 'cover',
    tintColor: constants.Colors.Gray,
    marginVertical: constants.Screen.Vertical(10),
  },
  profileImage: {
    height: constants.Screen.Vertical(200),
    width: constants.Screen.Vertical(290),
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
