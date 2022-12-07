import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import constants from '../../utils/constants';
import CustomButton from '../../components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment/moment';
import {setLogout} from '../../redux/userDataReducer';
import CustomStatusBar from '../../components/CustomStatusBar';
import CustomHeader from '../../components/CustomHeader';
import CustomBody from '../../components/CustomBody';

const Profile = ({navigation}) => {
  const UserData = useSelector(e => e?.UserDataReducer?.user_details);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar BGColor={constants.Colors.Primary} />
      <CustomHeader props={1} />
      <ScrollView>
        <CustomBody onPress={() => {}} />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 20,
          }}>
          <View style={styles.imageView}>
            <Image
              source={
                UserData?.profile_pic
                  ? {uri: UserData?.profile_pic}
                  : constants.Images.Profile
              }
              style={
                UserData?.profile_pic
                  ? styles.profileImage2
                  : styles.profileImage
              }
            />
          </View>
          <Text style={styles.valueText}>
            {UserData?.name ? UserData?.name : ''}
          </Text>
          <Text style={styles.labelText}>{'Email'}</Text>
          <Text style={styles.valueText}>
            {UserData?.email ? UserData?.email : ''}
          </Text>
          <Text style={styles.labelText}>{'Phone Number'}</Text>
          <Text style={styles.valueText}>
            {' '}
            {UserData?.phone_no ? UserData?.phone_no : ''}
          </Text>
          <Text style={styles.labelText}>{'Motivated Member Since'}</Text>
          <Text style={styles.valueText}>
            {UserData?.created_at
              ? moment(UserData?.created_at).format('DD-MMM-YYYY')
              : ''}
          </Text>
          <View style={{marginVertical: constants.Screen.Vertical(25)}} />
          <CustomButton
            BackgroundColor={constants.Colors.White}
            Name={'LOG OUT'}
            TextColor={constants.Colors.Primary}
            logo={require('../../assets/power.png')}
            tintColor={constants.Colors.Primary}
            borderColor={constants.Colors.Primary}
            customWidth={'50%'}
            OnPress={() => {
              dispatch(setLogout());
              navigation.reset({
                index: 0,
                routes: [{name: 'Login'}],
              });
            }}
          />
          <View style={{marginVertical: constants.Screen.Vertical(15)}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.Colors.White,
  },
  imageView: {
    backgroundColor: constants.Colors.Light_Gray,
    height: 200,
    width: 200,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: constants.Screen.Vertical(20),
  },
  profileImage: {
    height: 50,
    width: 50,
    resizeMode: 'cover',
    tintColor: constants.Colors.Gray,
  },
  profileImage2: {
    height: 200,
    width: 200,
    borderRadius: 200,
    resizeMode: 'cover',
  },
  valueText: {
    fontSize: constants.Screen.Moderate(20),
    color: constants.Colors.Black,
    fontWeight: '500',
    width: '90%',
    // backgroundColor: 'red',
    textAlign: 'center',
    marginBottom: constants.Screen.Vertical(10),
  },
  labelText: {
    fontSize: constants.Screen.Moderate(16),
    color: constants.Colors.Gray,
    fontWeight: '400',
    width: '90%',
    // backgroundColor: 'red',
    textAlign: 'center',
    marginVertical: constants.Screen.Vertical(5),
  },
});
