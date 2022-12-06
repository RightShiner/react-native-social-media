import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import AppStrings from '../utils/Strings';
import constants from '../utils/constants';

const CustomTextInput = ({
  labelEnable,
  labelText,
  Placeholder,
  KeyboardType,
  SecureTextEntry,
  onTextChange,
  Value,
  MaxLength,
}) => {
  const [show, setShow] = useState(SecureTextEntry ? SecureTextEntry : false);

  return (
    <View>
      {labelEnable ? (
        <>
          <Text style={styles.label}>{labelText ? labelText : ''}</Text>
          <View style={styles.inputView}>
            <TextInput
              placeholder={Placeholder ? Placeholder : ''}
              style={[
                styles.textInput,
                {width: SecureTextEntry ? '85%' : '100%'},
              ]}
              placeholderTextColor={constants.Colors.Gray}
              keyboardType={KeyboardType ? KeyboardType : 'default'}
              secureTextEntry={SecureTextEntry ? show : false}
              onChangeText={text => onTextChange(text)}
              value={Value ? Value : ''}
              maxLength={MaxLength ? MaxLength : 70}
            />
            {SecureTextEntry ? (
              <TouchableOpacity
                style={styles.eyeView}
                onPress={() => setShow(!show)}>
                <Image
                  source={
                    show ? constants.Images.Eye_Hide : constants.Images.Eye_Show
                  }
                  style={styles.eyeImage}
                />
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </View>
        </>
      ) : (
        <View style={styles.inputView}>
          <TextInput
            placeholder={Placeholder ? Placeholder : ''}
            style={[
              styles.textInput,
              {width: SecureTextEntry ? '85%' : '100%'},
            ]}
            placeholderTextColor={constants.Colors.Gray}
            keyboardType={KeyboardType ? KeyboardType : 'default'}
            secureTextEntry={SecureTextEntry ? show : false}
            onChangeText={text => onTextChange(text)}
            value={Value ? Value : ''}
            maxLength={MaxLength ? MaxLength : 70}
          />
          {SecureTextEntry ? (
            <TouchableOpacity
              style={styles.eyeView}
              onPress={() => setShow(!show)}>
              <Image
                source={
                  show ? constants.Images.Eye_Hide : constants.Images.Eye_Show
                }
                style={styles.eyeImage}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textInput: {
    fontSize: constants.Screen.Moderate(15),
    color: constants.Colors.Black,
    width: '90%',
    // backgroundColor: 'red',
    alignSelf: 'center',
    paddingHorizontal: 15,
  },
  label: {
    fontSize: constants.Screen.Moderate(15),
    color: constants.Colors.Black,
    width: '90%',
    // backgroundColor: 'yellow',
    alignSelf: 'center',
  },
  inputView: {
    flexDirection: 'row',
    //   backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: constants.Colors.Gray,
    marginVertical: constants.Screen.Vertical(10),
  },
  eyeImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: constants.Colors.Gray,
  },
  eyeView: {
    //   backgroundColor: 'red',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
