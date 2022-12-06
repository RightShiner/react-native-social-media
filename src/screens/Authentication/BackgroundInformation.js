import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import constants from '../../utils/constants';
import AppStrings from '../../utils/Strings';
import CustomBackCompnent from '../../components/CustomBackCompnent';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

const BackgroundInformation = ({navigation, route}) => {
  const [qusOne, setQusOne] = useState(0);
  const [qusTwo, setQusTwo] = useState(0);
  const [qusTwo2, setQusTwo2] = useState('');
  const [qusThree, setQusThree] = useState('');
  const [qusFour, setQusFour] = useState(0);
  const [qusFour2, setQusFour2] = useState('');
  const [qusFive, setQusFive] = useState(0);
  const [qusFive2, setQusFive2] = useState('');
  const [qusSix, setQusSix] = useState(0);
  const [qusSix2, setQusSix2] = useState('');
  const [qusSeven, setQusSeven] = useState(0);
  const [qusSeven2, setQusSeven2] = useState('');
  const [qusEight, setQusEight] = useState(0);
  const [qusEight2, setQusEight2] = useState('');

  useEffect(() => {
    //
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <CustomBackCompnent
        navigation={navigation}
        name={AppStrings.Background_Information}
        backLogo={constants.Images.Back_Arrow_Circle}
        marginVertical={constants.Screen.Vertical(10)}
      />

      {/* Header Text */}
      <Text style={styles.headerText}>
        {AppStrings.Background_Information_Header}
      </Text>

      {/* Backgrounf Information Questions */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View>
          {/* Questions One */}
          <Text style={styles.questionText}>{AppStrings.BI_Question_1}</Text>
          <View style={styles.optionRow}>
            <TouchableOpacity onPress={() => setQusOne(1)}>
              <Image
                style={styles.option}
                source={
                  qusOne === 1
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_1_Option1}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity onPress={() => setQusOne(2)}>
              <Image
                style={styles.option}
                source={
                  qusOne === 2
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_1_Option2}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity onPress={() => setQusOne(3)}>
              <Image
                style={styles.option}
                source={
                  qusOne === 3
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_1_Option3}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity onPress={() => setQusOne(4)}>
              <Image
                style={styles.option}
                source={
                  qusOne === 4
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_1_Option4}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity onPress={() => setQusOne(5)}>
              <Image
                style={styles.option}
                source={
                  qusOne === 5
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_1_Option5}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity onPress={() => setQusOne(6)}>
              <Image
                style={styles.option}
                source={
                  qusOne === 6
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_1_Option6}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity onPress={() => setQusOne(7)}>
              <Image
                style={styles.option}
                source={
                  qusOne === 7
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_1_Option7}
            </Text>
          </View>

          {/* Questions Two */}
          <View style={{marginVertical: constants.Screen.Vertical(5)}} />
          <Text style={styles.questionText}>{AppStrings.BI_Question_2}</Text>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusTwo2('');
                setQusTwo(1);
              }}>
              <Image
                style={styles.option}
                source={
                  qusTwo === 1
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_2_Option1}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusTwo2('');
                setQusTwo(2);
              }}>
              <Image
                style={styles.option}
                source={
                  qusTwo === 2
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_2_Option2}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity onPress={() => setQusTwo(3)}>
              <Image
                style={styles.option}
                source={
                  qusTwo === 3
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_2_Option3}
            </Text>
          </View>
          <CustomTextInput
            labelEnable={false}
            Placeholder={AppStrings.Enter_Here}
            SecureTextEntry={false}
            onTextChange={text => setQusTwo2(text)}
            Value={qusTwo2}
          />

          {/* Questions Three */}
          <View style={{marginVertical: constants.Screen.Vertical(5)}} />
          <Text style={styles.questionText}>{AppStrings.BI_Question_3}</Text>
          <CustomTextInput
            labelEnable={false}
            Placeholder={AppStrings.Enter_Here}
            SecureTextEntry={false}
            onTextChange={text => setQusThree(text)}
            Value={qusThree}
          />

          {/* Questions Four */}
          <View style={{marginVertical: constants.Screen.Vertical(5)}} />
          <Text style={styles.questionText}>{AppStrings.BI_Question_4}</Text>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusFour2('');
                setQusFour(1);
              }}>
              <Image
                style={styles.option}
                source={
                  qusFour === 1
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_4_Option1}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusFour2('');
                setQusFour(2);
              }}>
              <Image
                style={styles.option}
                source={
                  qusFour === 2
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_4_Option2}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusFour2('');
                setQusFour(3);
              }}>
              <Image
                style={styles.option}
                source={
                  qusFour === 3
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_4_Option3}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusFour(4);
              }}>
              <Image
                style={styles.option}
                source={
                  qusFour === 4
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_4_Option4}
            </Text>
          </View>
          <CustomTextInput
            labelEnable={false}
            Placeholder={AppStrings.Enter_Here}
            SecureTextEntry={false}
            onTextChange={text => setQusFour2(text)}
            Value={qusFour2}
          />

          {/* Questions Five */}
          <View style={{marginVertical: constants.Screen.Vertical(5)}} />
          <Text style={styles.questionText}>{AppStrings.BI_Question_5}</Text>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusFive2('');
                setQusFive(1);
              }}>
              <Image
                style={styles.option}
                source={
                  qusFive === 1
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_5_Option1}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusFive2('');
                setQusFive(2);
              }}>
              <Image
                style={styles.option}
                source={
                  qusFive === 2
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_5_Option2}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusFive2('');
                setQusFive(3);
              }}>
              <Image
                style={styles.option}
                source={
                  qusFive === 3
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_5_Option3}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusFive2('');
                setQusFive(4);
              }}>
              <Image
                style={styles.option}
                source={
                  qusFive === 4
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_5_Option4}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusFive2('');
                setQusFive(5);
              }}>
              <Image
                style={styles.option}
                source={
                  qusFive === 5
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_5_Option5}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusFive2('');
                setQusFive(6);
              }}>
              <Image
                style={styles.option}
                source={
                  qusFive === 6
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_5_Option6}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusFive2('');
                setQusFive(7);
              }}>
              <Image
                style={styles.option}
                source={
                  qusFive === 7
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_5_Option7}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusFive2('');
                setQusFive(8);
              }}>
              <Image
                style={styles.option}
                source={
                  qusFive === 8
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_5_Option8}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusFive(9);
              }}>
              <Image
                style={styles.option}
                source={
                  qusFive === 9
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_5_Option9}
            </Text>
          </View>
          <CustomTextInput
            labelEnable={false}
            Placeholder={AppStrings.Enter_Here}
            SecureTextEntry={false}
            onTextChange={text => setQusFive2(text)}
            Value={qusFive2}
          />

          {/* Questions Six */}
          <View style={{marginVertical: constants.Screen.Vertical(5)}} />
          <Text style={styles.questionText}>{AppStrings.BI_Question_6}</Text>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusSix2('');
                setQusSix(1);
              }}>
              <Image
                style={styles.option}
                source={
                  qusSix === 1
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_6_Option1}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusSix2('');
                setQusSix(2);
              }}>
              <Image
                style={styles.option}
                source={
                  qusSix === 2
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_6_Option2}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusSix2('');
                setQusSix(3);
              }}>
              <Image
                style={styles.option}
                source={
                  qusSix === 3
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_6_Option3}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusSix2('');
                setQusSix(4);
              }}>
              <Image
                style={styles.option}
                source={
                  qusSix === 4
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_6_Option4}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusSix2('');
                setQusSix(5);
              }}>
              <Image
                style={styles.option}
                source={
                  qusSix === 5
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_6_Option5}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusSix2('');
                setQusSix(6);
              }}>
              <Image
                style={styles.option}
                source={
                  qusSix === 6
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_6_Option6}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusSix2('');
                setQusSix(7);
              }}>
              <Image
                style={styles.option}
                source={
                  qusSix === 7
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_6_Option7}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusSix2('');
                setQusSix(8);
              }}>
              <Image
                style={styles.option}
                source={
                  qusSix === 8
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_6_Option8}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusSix(9);
              }}>
              <Image
                style={styles.option}
                source={
                  qusSix === 9
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_6_Option9}
            </Text>
          </View>
          <CustomTextInput
            labelEnable={false}
            Placeholder={AppStrings.Enter_Here}
            SecureTextEntry={false}
            onTextChange={text => setQusSix2(text)}
            Value={qusSix2}
          />

          {/* Questions Seven */}
          <View style={{marginVertical: constants.Screen.Vertical(5)}} />
          <Text style={styles.questionText}>{AppStrings.BI_Question_7}</Text>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusSeven2('');
                setQusSeven(1);
              }}>
              <Image
                style={styles.option}
                source={
                  qusSeven === 1
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_7_Option1}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusSeven2('');
                setQusSeven(2);
              }}>
              <Image
                style={styles.option}
                source={
                  qusSeven === 2
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_7_Option2}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusSeven2('');
                setQusSeven(3);
              }}>
              <Image
                style={styles.option}
                source={
                  qusSeven === 3
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_7_Option3}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusSeven2('');
                setQusSeven(4);
              }}>
              <Image
                style={styles.option}
                source={
                  qusSeven === 4
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_7_Option4}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusSeven2('');
                setQusSeven(5);
              }}>
              <Image
                style={styles.option}
                source={
                  qusSeven === 5
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_7_Option5}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusSeven2('');
                setQusSeven(6);
              }}>
              <Image
                style={styles.option}
                source={
                  qusSeven === 6
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_7_Option6}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusSeven2('');
                setQusSeven(7);
              }}>
              <Image
                style={styles.option}
                source={
                  qusSeven === 7
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_7_Option7}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusSeven2('');
                setQusSeven(8);
              }}>
              <Image
                style={styles.option}
                source={
                  qusSeven === 8
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_7_Option8}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusSeven(9);
              }}>
              <Image
                style={styles.option}
                source={
                  qusSeven === 9
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_7_Option9}
            </Text>
          </View>
          <CustomTextInput
            labelEnable={false}
            Placeholder={AppStrings.Enter_Here}
            SecureTextEntry={false}
            onTextChange={text => setQusSeven2(text)}
            Value={qusSeven2}
          />

          {/* Questions Eight */}
          <View style={{marginVertical: constants.Screen.Vertical(5)}} />
          <Text style={styles.questionText}>{AppStrings.BI_Question_8}</Text>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusEight2('');
                setQusEight(1);
              }}>
              <Image
                style={styles.option}
                source={
                  qusEight === 1
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_8_Option1}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusEight2('');
                setQusEight(2);
              }}>
              <Image
                style={styles.option}
                source={
                  qusEight === 2
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_8_Option2}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusEight2('');
                setQusEight(3);
              }}>
              <Image
                style={styles.option}
                source={
                  qusEight === 3
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_8_Option3}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusEight2('');
                setQusEight(4);
              }}>
              <Image
                style={styles.option}
                source={
                  qusEight === 4
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_8_Option4}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusEight2('');
                setQusEight(5);
              }}>
              <Image
                style={styles.option}
                source={
                  qusEight === 5
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_8_Option5}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusEight2('');
                setQusEight(6);
              }}>
              <Image
                style={styles.option}
                source={
                  qusEight === 6
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_8_Option6}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusEight2('');
                setQusEight(7);
              }}>
              <Image
                style={styles.option}
                source={
                  qusEight === 7
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_8_Option7}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                setQusEight(8);
              }}>
              <Image
                style={styles.option}
                source={
                  qusEight === 8
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>
              {AppStrings.BI_Question_8_Option8}
            </Text>
          </View>
          <CustomTextInput
            labelEnable={false}
            Placeholder={AppStrings.Enter_Here}
            SecureTextEntry={false}
            onTextChange={text => setQusEight2(text)}
            Value={qusEight2}
          />

          {/* Custom Button */}
          <View
            style={{
              marginVertical: constants.Screen.Vertical(25),
            }}>
            <CustomButton
              BackgroundColor={constants.Colors.Primary}
              Name={AppStrings.Next}
              TextColor={constants.Colors.White}
              OnPress={() =>
                navigation.navigate('ImpactSocialMedia', {
                  props: route?.params?.props ? route?.params?.props : '',
                })
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BackgroundInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.Colors.White,
  },
  headerText: {
    fontSize: constants.Screen.Moderate(16),
    color: constants.Colors.Black,
    fontWeight: '500',
    width: '90%',
    // backgroundColor: 'red',
    textAlign: 'left',
    marginTop: constants.Screen.Vertical(0),
    alignSelf: 'center',
  },
  scrollView: {
    flex: 1,
    // backgroundColor: 'red',
    marginVertical: constants.Screen.Vertical(10),
    width: '90%',
    alignSelf: 'center',
  },
  questionText: {
    fontSize: constants.Screen.Moderate(16),
    color: constants.Colors.Black,
    fontWeight: '400',
    // backgroundColor: 'red',
    textAlign: 'left',
  },
  optionText: {
    fontSize: constants.Screen.Moderate(14),
    color: constants.Colors.Black,
    fontWeight: '400',
    // backgroundColor: 'red',
    textAlign: 'left',
  },
  option: {
    height: 20,
    width: 20,
    resizeMode: 'cover',
    marginHorizontal: constants.Screen.Vertical(10),
  },
  optionRow: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
    marginVertical: constants.Screen.Vertical(5),
  },
});
