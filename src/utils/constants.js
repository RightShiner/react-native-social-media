import {Dimensions, I18nManager} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

// All Colors Codes
export const Colors = {
  White: '#FFFFFF',
  Black: '#000000',
  Primary: '#074EE8',
  Gray: '#677294',
  Light_Gray: '#EEEEEE',
  Pink: '#fff2e1',
};

// Custom Fonts
export const Fonts = {
  // Black: 'NunitoSans-Black',
};

// Custom RegX For validation
export const RegX = {
  EmailRegX: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/,
  MobileRegX: /^5[0-9]{8}$/,
  OtpRegX: /^[0-9]{4}$/,
  NameRegX: /^[A-Za-z~!@#$%^&*0-9 ]{20}$/,
  UsernameRegX: /^@[A-Za-z0-9]$/,
  Search: /^[A-Za-z0-9]$/,
};

// Custom Screen Dimensions for all types Devices
const Screen_Height = Dimensions.get('window').height;
const Screen_Width = Dimensions.get('window').width;
const Screen_Font = Dimensions.get('window').fontScale;

export const Screen = {
  Height: Screen_Height,
  Width: Screen_Width,
  Font: Screen_Font,
  Horizontal: scale,
  Vertical: verticalScale,
  Moderate: moderateScale,
};

// All Images paths used in applications
export const Images = {
  Logo: require('../assets/logo.png'),
  Add: require('../assets/add.png'),
  Back_Arrow_Circle: require('../assets/back_arrow_circle.png'),
  Eye_Show: require('../assets/eye_show.png'),
  Eye_Hide: require('../assets/eye_hide.png'),
  Radio_Selected: require('../assets/radio_selected.png'),
  Radio_Unselected: require('../assets/radio_unselected.png'),
  Home: require('../assets/home.png'),
  Blog: require('../assets/blog.png'),
  Directory: require('../assets/directory.png'),
  Chat: require('../assets/message.png'),
  Profile: require('../assets/profile.png'),
  Black_Logo: require('../assets/Black_Logo.png'),
  Right_arrow: require('../assets/right_arrow.png'),
  CheckBox_Selected: require('../assets/checkbox_selected.png'),
  CheckBox_Unselected: require('../assets/checkbox_unselected.png'),
  Left_arrow: require('../assets/left_arrow.png'),
  LogOut: require('../assets/logout.png'),
  Send_Mail: require('../assets/send_mail.png'),
};

// Storage Key Id for Get/Set Values in Async Storage
export const Storage_Key = {
  Id: '@id',
};

export default {Colors, Fonts, RegX, Screen, Images, Storage_Key};
