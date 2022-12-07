import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import constants from '../../utils/constants';
import AppStrings from '../../utils/Strings';
import CustomBackCompnent from '../../components/CustomBackCompnent';
import CustomButton from '../../components/CustomButton';

const ImpactSocialMedia = ({navigation, route}) => {
  const [qus1, setQus1] = useState(0);
  const [qus2, setQus2] = useState(0);
  const [qus3, setQus3] = useState(0);
  const [qus4, setQus4] = useState(0);
  const [qus5, setQus5] = useState(0);
  const [qus6, setQus6] = useState(0);
  const [qus7, setQus7] = useState(0);
  const [qus8, setQus8] = useState(0);
  const [qus9, setQus9] = useState(0);
  const [qus10, setQus10] = useState(0);
  const [qus11, setQus11] = useState(0);
  const [qus12, setQus12] = useState(0);
  const [qus13, setQus13] = useState(0);
  const [qus14, setQus14] = useState(0);
  const [qus15, setQus15] = useState(0);
  const [qus16, setQus16] = useState(0);
  const [qus17, setQus17] = useState(0);
  const [qus18, setQus18] = useState(0);
  const [qus19, setQus19] = useState(0);
  const [qus20, setQus20] = useState(0);
  const [qus21, setQus21] = useState(0);
  const [qus22, setQus22] = useState(0);
  const [qus23, setQus23] = useState(0);
  const [qus24, setQus24] = useState(0);
  const [qus25, setQus25] = useState(0);

  useEffect(() => {
    //
  }, []);

  const renderList = ({item, index}) => {
    return (
      // Questions
      item?.id === 34 ? (
        <>
          <View style={{marginVertical: constants.Screen.Vertical(5)}} />
          <Text style={styles.questionText}>{`* ${index + 1}. ${
            item?.questions
          }`}</Text>
          <View style={styles.optionRow}>
            <TouchableOpacity onPress={() => setQus25(item?.options[0]?.id)}>
              <Image
                style={styles.option}
                source={
                  qus25 === item?.options[0]?.id
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>{item?.options[0]?.answers}</Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity onPress={() => setQus25(item?.options[1]?.id)}>
              <Image
                style={styles.option}
                source={
                  qus25 === item?.options[1]?.id
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>{item?.options[1]?.answers}</Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity onPress={() => setQus25(item?.options[2]?.id)}>
              <Image
                style={styles.option}
                source={
                  qus25 === item?.options[2]?.id
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>{item?.options[2]?.answers}</Text>
          </View>
        </>
      ) : (
        <>
          <View style={{marginVertical: constants.Screen.Vertical(5)}} />
          <Text style={styles.questionText}>{`* ${index + 1}. ${
            item?.questions
          }`}</Text>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                item?.id === 1
                  ? setQus1(1)
                  : item?.id === 2
                  ? setQus2(1)
                  : item?.id === 3
                  ? setQus3(1)
                  : item?.id === 4
                  ? setQus4(1)
                  : item?.id === 5
                  ? setQus5(1)
                  : item?.id === 6
                  ? setQus6(1)
                  : item?.id === 7
                  ? setQus7(1)
                  : item?.id === 8
                  ? setQus8(1)
                  : item?.id === 9
                  ? setQus9(1)
                  : item?.id === 10
                  ? setQus10(1)
                  : item?.id === 11
                  ? setQus11(1)
                  : item?.id === 12
                  ? setQus12(1)
                  : item?.id === 13
                  ? setQus13(1)
                  : item?.id === 14
                  ? setQus14(1)
                  : item?.id === 15
                  ? setQus15(1)
                  : item?.id === 16
                  ? setQus16(1)
                  : item?.id === 17
                  ? setQus17(1)
                  : item?.id === 18
                  ? setQus18(1)
                  : item?.id === 19
                  ? setQus19(1)
                  : item?.id === 20
                  ? setQus20(1)
                  : item?.id === 21
                  ? setQus21(1)
                  : item?.id === 22
                  ? setQus22(1)
                  : item?.id === 23
                  ? setQus23(1)
                  : item?.id === 24
                  ? setQus24(1)
                  : '';
              }}>
              <Image
                style={styles.option}
                source={
                  item?.id === 1 && qus1 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 2 && qus2 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 3 && qus3 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 4 && qus4 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 5 && qus5 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 6 && qus6 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 7 && qus7 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 8 && qus8 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 9 && qus9 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 10 && qus10 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 11 && qus11 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 12 && qus12 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 13 && qus13 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 14 && qus14 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 15 && qus15 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 16 && qus16 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 17 && qus17 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 18 && qus18 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 19 && qus19 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 20 && qus20 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 21 && qus21 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 22 && qus22 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 23 && qus23 === 1
                    ? constants.Images.Radio_Selected
                    : item?.id === 24 && qus24 === 1
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>{item?.options[0]?.answers}</Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                item?.id === 1
                  ? setQus1(2)
                  : item?.id === 2
                  ? setQus2(2)
                  : item?.id === 3
                  ? setQus3(2)
                  : item?.id === 4
                  ? setQus4(2)
                  : item?.id === 5
                  ? setQus5(2)
                  : item?.id === 6
                  ? setQus6(2)
                  : item?.id === 7
                  ? setQus7(2)
                  : item?.id === 8
                  ? setQus8(2)
                  : item?.id === 9
                  ? setQus9(2)
                  : item?.id === 10
                  ? setQus10(2)
                  : item?.id === 11
                  ? setQus11(2)
                  : item?.id === 12
                  ? setQus12(2)
                  : item?.id === 13
                  ? setQus13(2)
                  : item?.id === 14
                  ? setQus14(2)
                  : item?.id === 15
                  ? setQus15(2)
                  : item?.id === 16
                  ? setQus16(2)
                  : item?.id === 17
                  ? setQus17(2)
                  : item?.id === 18
                  ? setQus18(2)
                  : item?.id === 19
                  ? setQus19(2)
                  : item?.id === 20
                  ? setQus20(2)
                  : item?.id === 21
                  ? setQus21(2)
                  : item?.id === 22
                  ? setQus22(2)
                  : item?.id === 23
                  ? setQus23(2)
                  : item?.id === 24
                  ? setQus24(2)
                  : '';
              }}>
              <Image
                style={styles.option}
                source={
                  item?.id === 1 && qus1 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 2 && qus2 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 3 && qus3 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 4 && qus4 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 5 && qus5 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 6 && qus6 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 7 && qus7 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 8 && qus8 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 9 && qus9 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 10 && qus10 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 11 && qus11 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 12 && qus12 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 13 && qus13 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 14 && qus14 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 15 && qus15 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 16 && qus16 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 17 && qus17 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 18 && qus18 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 19 && qus19 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 20 && qus20 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 21 && qus21 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 22 && qus22 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 23 && qus23 === 2
                    ? constants.Images.Radio_Selected
                    : item?.id === 24 && qus24 === 2
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>{item?.options[1]?.answers}</Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                item?.id === 1
                  ? setQus1(3)
                  : item?.id === 2
                  ? setQus2(3)
                  : item?.id === 3
                  ? setQus3(3)
                  : item?.id === 4
                  ? setQus4(3)
                  : item?.id === 5
                  ? setQus5(3)
                  : item?.id === 6
                  ? setQus6(3)
                  : item?.id === 7
                  ? setQus7(3)
                  : item?.id === 8
                  ? setQus8(3)
                  : item?.id === 9
                  ? setQus9(3)
                  : item?.id === 10
                  ? setQus10(3)
                  : item?.id === 11
                  ? setQus11(3)
                  : item?.id === 12
                  ? setQus12(3)
                  : item?.id === 13
                  ? setQus13(3)
                  : item?.id === 14
                  ? setQus14(3)
                  : item?.id === 15
                  ? setQus15(3)
                  : item?.id === 16
                  ? setQus16(3)
                  : item?.id === 17
                  ? setQus17(3)
                  : item?.id === 18
                  ? setQus18(3)
                  : item?.id === 19
                  ? setQus19(3)
                  : item?.id === 20
                  ? setQus20(3)
                  : item?.id === 21
                  ? setQus21(3)
                  : item?.id === 22
                  ? setQus22(3)
                  : item?.id === 23
                  ? setQus23(3)
                  : item?.id === 24
                  ? setQus24(3)
                  : '';
              }}>
              <Image
                style={styles.option}
                source={
                  item?.id === 1 && qus1 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 2 && qus2 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 3 && qus3 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 4 && qus4 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 5 && qus5 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 6 && qus6 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 7 && qus7 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 8 && qus8 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 9 && qus9 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 10 && qus10 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 11 && qus11 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 12 && qus12 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 13 && qus13 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 14 && qus14 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 15 && qus15 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 16 && qus16 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 17 && qus17 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 18 && qus18 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 19 && qus19 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 20 && qus20 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 21 && qus21 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 22 && qus22 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 23 && qus23 === 3
                    ? constants.Images.Radio_Selected
                    : item?.id === 24 && qus24 === 3
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>{item?.options[2]?.answers}</Text>
          </View>
          <View style={styles.optionRow}>
            <TouchableOpacity
              onPress={() => {
                item?.id === 1
                  ? setQus1(4)
                  : item?.id === 2
                  ? setQus2(4)
                  : item?.id === 3
                  ? setQus3(4)
                  : item?.id === 4
                  ? setQus4(4)
                  : item?.id === 5
                  ? setQus5(4)
                  : item?.id === 6
                  ? setQus6(4)
                  : item?.id === 7
                  ? setQus7(4)
                  : item?.id === 8
                  ? setQus8(4)
                  : item?.id === 9
                  ? setQus9(4)
                  : item?.id === 10
                  ? setQus10(4)
                  : item?.id === 11
                  ? setQus11(4)
                  : item?.id === 12
                  ? setQus12(4)
                  : item?.id === 13
                  ? setQus13(4)
                  : item?.id === 14
                  ? setQus14(4)
                  : item?.id === 15
                  ? setQus15(4)
                  : item?.id === 16
                  ? setQus16(4)
                  : item?.id === 17
                  ? setQus17(4)
                  : item?.id === 18
                  ? setQus18(4)
                  : item?.id === 19
                  ? setQus19(4)
                  : item?.id === 20
                  ? setQus20(4)
                  : item?.id === 21
                  ? setQus21(4)
                  : item?.id === 22
                  ? setQus22(4)
                  : item?.id === 23
                  ? setQus23(4)
                  : item?.id === 24
                  ? setQus24(4)
                  : '';
              }}>
              <Image
                style={styles.option}
                source={
                  item?.id === 1 && qus1 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 2 && qus2 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 3 && qus3 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 4 && qus4 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 5 && qus5 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 6 && qus6 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 7 && qus7 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 8 && qus8 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 9 && qus9 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 10 && qus10 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 11 && qus11 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 12 && qus12 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 13 && qus13 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 14 && qus14 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 15 && qus15 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 16 && qus16 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 17 && qus17 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 18 && qus18 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 19 && qus19 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 20 && qus20 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 21 && qus21 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 22 && qus22 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 23 && qus23 === 4
                    ? constants.Images.Radio_Selected
                    : item?.id === 24 && qus24 === 4
                    ? constants.Images.Radio_Selected
                    : constants.Images.Radio_Unselected
                }
              />
            </TouchableOpacity>
            <Text style={styles.optionText}>{item?.options[3]?.answers}</Text>
          </View>
        </>
      )
    );
  };

  const listFooterComponent = () => {
    return (
      // Custom Button
      <View
        style={{
          marginVertical: constants.Screen.Vertical(25),
        }}>
        <CustomButton
          BackgroundColor={constants.Colors.Primary}
          Name={AppStrings.Submit}
          TextColor={constants.Colors.White}
          OnPress={() =>
            navigation.navigate('ProfileSetup', {
              props: route?.params?.props ? route?.params?.props : '',
            })
          }
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <CustomBackCompnent
        navigation={navigation}
        name={AppStrings.Imapact_Social_Media}
        backLogo={constants.Images.Back_Arrow_Circle}
        marginVertical={constants.Screen.Vertical(10)}
      />

      {/* Header Text One */}
      <Text style={styles.headerText}>
        {AppStrings.Imapact_Social_Media_Header_One}
      </Text>

      {/* Header Text Two */}
      <Text
        style={[styles.headerText, {marginTop: constants.Screen.Vertical(10)}]}>
        {AppStrings.Imapact_Social_Media_Header_Two}
      </Text>

      {/* CUstom Question FlatList */}
      <FlatList
        data={route?.params?.AFData?.question}
        keyExtractor={(key, index) => key?.id}
        style={styles.scrollView}
        renderItem={({item, index}) => renderList({item, index})}
        ListFooterComponent={listFooterComponent}
      />
    </SafeAreaView>
  );
};

export default ImpactSocialMedia;

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
