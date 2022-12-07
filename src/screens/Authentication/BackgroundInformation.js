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
import {GetApi} from '../../Services/api.service';
import {ASSESSMENT_FORM} from '../../Services/ApiURL';
import CustomLoader from '../../components/CustomLoader';
import CustomAlertMessage from '../../components/CustomAlertMessage';

const BackgroundInformation = ({navigation, route}) => {
  const [qusOne, setQusOne] = useState(0);
  const [qusTwo, setQusTwo] = useState(0);
  const [qusTwo2, setQusTwo2] = useState('');
  const [qusThree, setQusThree] = useState(0);
  const [qusThree2, setQusThree2] = useState('');
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
  const [qusEightOne, setQusEightOne] = useState(0);
  const [qusEightTwo, setQusEightTwo] = useState(0);
  const [qusEightThree, setQusEightThree] = useState(0);
  const [qusEightFour, setQusEightFour] = useState(0);
  const [qusEightFive, setQusEightFive] = useState(0);
  const [qusEightSix, setQusEightSix] = useState(0);
  const [qusEightSeven, setQusEightSeven] = useState(0);
  const [loader, setLoader] = useState(false);
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [assessmentFormData, setAssessmentFormData] = useState('');
  const [emptyList, setEmptyList] = useState('');

  useEffect(() => {
    assessmentFormApiCall();
  }, []);

  const assessmentFormApiCall = () => {
    setLoader(true);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    };
    //console.log('signUp Config: ', config);
    GetApi(ASSESSMENT_FORM, config)
      .then(response => {
        setLoader(false);
        console.log('Assessment Form Response: ', response);
        if (response?.status !== 0) {
          setAssessmentFormData(response?.data);
        } else {
          setErrorMessage(response?.message);
          setVisible(true);
        }
      })
      .catch(error => {
        setLoader(false);
        console.log('Error: ', error);
        setEmptyList(AppStrings.List_Empty_Text);
      });
  };

  const saveAssessmentFormAPICall = () => {
    const backgroundInformationData = {
      question1: [qusOne, ''],
      question2: [qusTwo, qusTwo2],
      question3: [qusThree, qusThree2],
      question4: [qusFour, qusFour2],
      question5: [qusFive, qusFive2],
      question6: [qusSix, qusSix2],
      question7: [qusSeven, qusSeven2],
      question8: [
        qusEight === 0
          ? [
              qusEightOne,
              qusEightTwo,
              qusEightThree,
              qusEightFour,
              qusEightFive,
              qusEightSix,
              qusEightSeven,
            ].filter(e => e !== 0)
          : qusEight,
        qusEight2,
      ],
    };
    console.log('BI DATA: ', backgroundInformationData);
    navigation.navigate('ImpactSocialMedia', {
      props: route?.params?.props ? route?.params?.props : '',
      AFData: assessmentFormData[1],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <CustomBackCompnent
        navigation={navigation}
        name={AppStrings.Background_Information}
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
        {AppStrings.Background_Information_Header}
      </Text>

      {/* Backgrounf Information Questions */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {assessmentFormData === '' ? (
          <View style={styles.emptyView}>
            <Text style={styles.textEmpty}>{emptyList}</Text>
          </View>
        ) : (
          <View>
            {/* Questions One */}
            <Text style={styles.questionText}>
              {`* 1. ${assessmentFormData[0]?.question[0]?.questions}`}
            </Text>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() =>
                  setQusOne(assessmentFormData[0]?.question[0]?.options[0]?.id)
                }>
                <Image
                  style={styles.option}
                  source={
                    qusOne ===
                    assessmentFormData[0]?.question[0]?.options[0]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[0]?.options[0]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() =>
                  setQusOne(assessmentFormData[0]?.question[0]?.options[1]?.id)
                }>
                <Image
                  style={styles.option}
                  source={
                    qusOne ===
                    assessmentFormData[0]?.question[0]?.options[1]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[0]?.options[1]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() =>
                  setQusOne(assessmentFormData[0]?.question[0]?.options[2]?.id)
                }>
                <Image
                  style={styles.option}
                  source={
                    qusOne ===
                    assessmentFormData[0]?.question[0]?.options[2]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[0]?.options[2]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() =>
                  setQusOne(assessmentFormData[0]?.question[0]?.options[3]?.id)
                }>
                <Image
                  style={styles.option}
                  source={
                    qusOne ===
                    assessmentFormData[0]?.question[0]?.options[3]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[0]?.options[3]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() =>
                  setQusOne(assessmentFormData[0]?.question[0]?.options[4]?.id)
                }>
                <Image
                  style={styles.option}
                  source={
                    qusOne ===
                    assessmentFormData[0]?.question[0]?.options[4]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[0]?.options[4]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() =>
                  setQusOne(assessmentFormData[0]?.question[0]?.options[5]?.id)
                }>
                <Image
                  style={styles.option}
                  source={
                    qusOne ===
                    assessmentFormData[0]?.question[0]?.options[5]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[0]?.options[5]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() =>
                  setQusOne(assessmentFormData[0]?.question[0]?.options[6]?.id)
                }>
                <Image
                  style={styles.option}
                  source={
                    qusOne ===
                    assessmentFormData[0]?.question[0]?.options[6]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[0]?.options[6]?.answers}
              </Text>
            </View>

            {/* Questions Two */}
            <View style={{marginVertical: constants.Screen.Vertical(5)}} />
            <Text
              style={
                styles.questionText
              }>{`* 2. ${assessmentFormData[0]?.question[1]?.questions}`}</Text>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusTwo2('');
                  setQusTwo(assessmentFormData[0]?.question[1]?.options[0]?.id);
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusTwo ===
                    assessmentFormData[0]?.question[1]?.options[0]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[1]?.options[0]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusTwo2('');
                  setQusTwo(assessmentFormData[0]?.question[1]?.options[1]?.id);
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusTwo ===
                    assessmentFormData[0]?.question[1]?.options[1]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[1]?.options[1]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() =>
                  setQusTwo(assessmentFormData[0]?.question[1]?.options[2]?.id)
                }>
                <Image
                  style={styles.option}
                  source={
                    qusTwo ===
                    assessmentFormData[0]?.question[1]?.options[2]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[1]?.options[2]?.answers}
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
            <Text
              style={
                styles.questionText
              }>{`* 3. ${assessmentFormData[0]?.question[2]?.questions}`}</Text>
            <CustomTextInput
              labelEnable={false}
              Placeholder={AppStrings.Enter_Here}
              SecureTextEntry={false}
              onTextChange={text => {
                setQusThree(assessmentFormData[0]?.question[2]?.options[0]?.id);
                setQusThree2(text);
              }}
              Value={qusThree2}
            />

            {/* Questions Four */}
            <View style={{marginVertical: constants.Screen.Vertical(5)}} />
            <Text
              style={
                styles.questionText
              }>{`* 4. ${assessmentFormData[0]?.question[3]?.questions}`}</Text>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusFour2('');
                  setQusFour(
                    assessmentFormData[0]?.question[3]?.options[0]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusFour ===
                    assessmentFormData[0]?.question[3]?.options[0]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[3]?.options[0]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusFour2('');
                  setQusFour(
                    assessmentFormData[0]?.question[3]?.options[1]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusFour ===
                    assessmentFormData[0]?.question[3]?.options[1]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[3]?.options[1]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusFour2('');
                  setQusFour(
                    assessmentFormData[0]?.question[3]?.options[2]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusFour ===
                    assessmentFormData[0]?.question[3]?.options[2]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[3]?.options[2]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusFour(
                    assessmentFormData[0]?.question[3]?.options[3]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusFour ===
                    assessmentFormData[0]?.question[3]?.options[3]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[3]?.options[3]?.answers}
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
            <Text
              style={
                styles.questionText
              }>{`* 5. ${assessmentFormData[0]?.question[4]?.questions}`}</Text>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusFive2('');
                  setQusFive(
                    assessmentFormData[0]?.question[4]?.options[0]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusFive ===
                    assessmentFormData[0]?.question[4]?.options[0]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[4]?.options[0]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusFive2('');
                  setQusFive(
                    assessmentFormData[0]?.question[4]?.options[1]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusFive ===
                    assessmentFormData[0]?.question[4]?.options[1]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[4]?.options[1]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusFive2('');
                  setQusFive(
                    assessmentFormData[0]?.question[4]?.options[2]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusFive ===
                    assessmentFormData[0]?.question[4]?.options[2]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[4]?.options[2]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusFive2('');
                  setQusFive(
                    assessmentFormData[0]?.question[4]?.options[3]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusFive ===
                    assessmentFormData[0]?.question[4]?.options[3]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[4]?.options[3]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusFive2('');
                  setQusFive(
                    assessmentFormData[0]?.question[4]?.options[4]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusFive ===
                    assessmentFormData[0]?.question[4]?.options[4]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[4]?.options[4]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusFive2('');
                  setQusFive(
                    assessmentFormData[0]?.question[4]?.options[5]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusFive ===
                    assessmentFormData[0]?.question[4]?.options[5]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[4]?.options[5]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusFive2('');
                  setQusFive(
                    assessmentFormData[0]?.question[4]?.options[6]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusFive ===
                    assessmentFormData[0]?.question[4]?.options[6]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[4]?.options[6]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusFive2('');
                  setQusFive(
                    assessmentFormData[0]?.question[4]?.options[7]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusFive ===
                    assessmentFormData[0]?.question[4]?.options[7]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[4]?.options[7]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusFive(
                    assessmentFormData[0]?.question[4]?.options[8]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusFive ===
                    assessmentFormData[0]?.question[4]?.options[8]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[4]?.options[8]?.answers}
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
            <Text
              style={
                styles.questionText
              }>{`* 6. ${assessmentFormData[0]?.question[5]?.questions}`}</Text>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusSix2('');
                  setQusSix(assessmentFormData[0]?.question[5]?.options[0]?.id);
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusSix ===
                    assessmentFormData[0]?.question[5]?.options[0]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[5]?.options[0]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusSix2('');
                  setQusSix(assessmentFormData[0]?.question[5]?.options[1]?.id);
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusSix ===
                    assessmentFormData[0]?.question[5]?.options[1]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[5]?.options[1]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusSix2('');
                  setQusSix(assessmentFormData[0]?.question[5]?.options[2]?.id);
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusSix ===
                    assessmentFormData[0]?.question[5]?.options[2]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[5]?.options[2]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusSix2('');
                  setQusSix(assessmentFormData[0]?.question[5]?.options[3]?.id);
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusSix ===
                    assessmentFormData[0]?.question[5]?.options[3]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[5]?.options[3]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusSix2('');
                  setQusSix(assessmentFormData[0]?.question[5]?.options[4]?.id);
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusSix ===
                    assessmentFormData[0]?.question[5]?.options[4]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[5]?.options[4]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusSix2('');
                  setQusSix(assessmentFormData[0]?.question[5]?.options[5]?.id);
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusSix ===
                    assessmentFormData[0]?.question[5]?.options[5]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[5]?.options[5]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusSix2('');
                  setQusSix(assessmentFormData[0]?.question[5]?.options[6]?.id);
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusSix ===
                    assessmentFormData[0]?.question[5]?.options[6]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[5]?.options[6]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusSix2('');
                  setQusSix(assessmentFormData[0]?.question[5]?.options[7]?.id);
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusSix ===
                    assessmentFormData[0]?.question[5]?.options[7]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[5]?.options[7]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusSix(assessmentFormData[0]?.question[5]?.options[8]?.id);
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusSix ===
                    assessmentFormData[0]?.question[5]?.options[8]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[5]?.options[8]?.answers}
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
            <Text
              style={
                styles.questionText
              }>{`* 7. ${assessmentFormData[0]?.question[6]?.questions}`}</Text>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusSeven2('');
                  setQusSeven(
                    assessmentFormData[0]?.question[6]?.options[0]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusSeven ===
                    assessmentFormData[0]?.question[6]?.options[0]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[6]?.options[0]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusSeven2('');
                  setQusSeven(
                    assessmentFormData[0]?.question[6]?.options[1]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusSeven ===
                    assessmentFormData[0]?.question[6]?.options[1]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[6]?.options[1]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusSeven2('');
                  setQusSeven(
                    assessmentFormData[0]?.question[6]?.options[2]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusSeven ===
                    assessmentFormData[0]?.question[6]?.options[2]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[6]?.options[2]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusSeven2('');
                  setQusSeven(
                    assessmentFormData[0]?.question[6]?.options[3]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusSeven ===
                    assessmentFormData[0]?.question[6]?.options[3]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[6]?.options[3]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusSeven2('');
                  setQusSeven(
                    assessmentFormData[0]?.question[6]?.options[4]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusSeven ===
                    assessmentFormData[0]?.question[6]?.options[4]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[6]?.options[4]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusSeven2('');
                  setQusSeven(
                    assessmentFormData[0]?.question[6]?.options[5]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusSeven ===
                    assessmentFormData[0]?.question[6]?.options[5]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[6]?.options[5]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusSeven2('');
                  setQusSeven(
                    assessmentFormData[0]?.question[6]?.options[6]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusSeven ===
                    assessmentFormData[0]?.question[6]?.options[6]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[6]?.options[6]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusSeven2('');
                  setQusSeven(
                    assessmentFormData[0]?.question[6]?.options[7]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusSeven ===
                    assessmentFormData[0]?.question[6]?.options[7]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[6]?.options[7]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusSeven(
                    assessmentFormData[0]?.question[6]?.options[8]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusSeven ===
                    assessmentFormData[0]?.question[6]?.options[8]?.id
                      ? constants.Images.Radio_Selected
                      : constants.Images.Radio_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[6]?.options[8]?.answers}
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
            <Text
              style={
                styles.questionText
              }>{`* 8. ${assessmentFormData[0]?.question[7]?.questions}`}</Text>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusEight(0);
                  setQusEight2('');
                  setQusEightOne(
                    qusEightOne ===
                      assessmentFormData[0]?.question[7]?.options[0]?.id
                      ? 0
                      : assessmentFormData[0]?.question[7]?.options[0]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusEightOne ===
                    assessmentFormData[0]?.question[7]?.options[0]?.id
                      ? constants.Images.CheckBox_Selected
                      : constants.Images.CheckBox_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[7]?.options[0]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusEight(0);
                  setQusEight2('');
                  setQusEightTwo(
                    qusEightTwo ===
                      assessmentFormData[0]?.question[7]?.options[1]?.id
                      ? 0
                      : assessmentFormData[0]?.question[7]?.options[1]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusEightTwo ===
                    assessmentFormData[0]?.question[7]?.options[1]?.id
                      ? constants.Images.CheckBox_Selected
                      : constants.Images.CheckBox_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[7]?.options[1]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusEight(0);
                  setQusEight2('');
                  setQusEightThree(
                    qusEightThree ===
                      assessmentFormData[0]?.question[7]?.options[2]?.id
                      ? 0
                      : assessmentFormData[0]?.question[7]?.options[2]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusEightThree ===
                    assessmentFormData[0]?.question[7]?.options[2]?.id
                      ? constants.Images.CheckBox_Selected
                      : constants.Images.CheckBox_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[7]?.options[2]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusEight(0);
                  setQusEight2('');
                  setQusEightFour(
                    qusEightFour ===
                      assessmentFormData[0]?.question[7]?.options[3]?.id
                      ? 0
                      : assessmentFormData[0]?.question[7]?.options[3]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusEightFour ===
                    assessmentFormData[0]?.question[7]?.options[3]?.id
                      ? constants.Images.CheckBox_Selected
                      : constants.Images.CheckBox_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[7]?.options[3]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusEight(0);
                  setQusEight2('');
                  setQusEightFive(
                    qusEightFive ===
                      assessmentFormData[0]?.question[7]?.options[4]?.id
                      ? 0
                      : assessmentFormData[0]?.question[7]?.options[4]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusEightFive ===
                    assessmentFormData[0]?.question[7]?.options[4]?.id
                      ? constants.Images.CheckBox_Selected
                      : constants.Images.CheckBox_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[7]?.options[4]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusEight(0);
                  setQusEight2('');
                  setQusEightSix(
                    qusEightSix ===
                      assessmentFormData[0]?.question[7]?.options[5]?.id
                      ? 0
                      : assessmentFormData[0]?.question[7]?.options[5]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusEightSix ===
                    assessmentFormData[0]?.question[7]?.options[5]?.id
                      ? constants.Images.CheckBox_Selected
                      : constants.Images.CheckBox_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[7]?.options[5]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusEight(0);
                  setQusEight2('');
                  setQusEightSeven(
                    qusEightSeven ===
                      assessmentFormData[0]?.question[7]?.options[6]?.id
                      ? 0
                      : assessmentFormData[0]?.question[7]?.options[6]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusEightSeven ===
                    assessmentFormData[0]?.question[7]?.options[6]?.id
                      ? constants.Images.CheckBox_Selected
                      : constants.Images.CheckBox_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[7]?.options[6]?.answers}
              </Text>
            </View>
            <View style={styles.optionRow}>
              <TouchableOpacity
                onPress={() => {
                  setQusEightOne(0);
                  setQusEightTwo(0);
                  setQusEightThree(0);
                  setQusEightFour(0);
                  setQusEightFive(0);
                  setQusEightSix(0);
                  setQusEightSeven(0);
                  setQusEight(
                    assessmentFormData[0]?.question[7]?.options[7]?.id,
                  );
                }}>
                <Image
                  style={styles.option}
                  source={
                    qusEight ===
                    assessmentFormData[0]?.question[7]?.options[7]?.id
                      ? constants.Images.CheckBox_Selected
                      : constants.Images.CheckBox_Unselected
                  }
                />
              </TouchableOpacity>
              <Text style={styles.optionText}>
                {assessmentFormData[0]?.question[7]?.options[7]?.answers}
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
                OnPress={() => {
                  saveAssessmentFormAPICall();
                }}
              />
            </View>
          </View>
        )}
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
  emptyView: {
    width: '100%',
    height: constants.Screen.Height / 1.5,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textEmpty: {
    fontFamily: 'bold',
    fontSize: constants.Screen.Moderate(16),
    color: constants.Colors.Gray,
  },
});
