import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Dashboard/Home';
import Blog from '../screens/Dashboard/Blog';
import Chat from '../screens/Dashboard/Chat';
import Profile from '../screens/Dashboard/Profile';
import Directory from '../screens/Dashboard/Directory';
import constants from '../utils/constants';
import {View, Image, Text} from 'react-native';
import AppStrings from '../utils/Strings';

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          return (
            <View
              style={{
                // backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                resizeMode="contain"
                style={[
                  route.name === 'Profile'
                    ? {
                        height: 35,
                        width: 35,
                        resizeMode: 'cover',
                        tintColor: focused
                          ? constants.Colors.Primary
                          : constants.Colors.Gray,
                      }
                    : {
                        height: 30,
                        width: 30,
                        resizeMode: 'cover',
                        tintColor: focused
                          ? constants.Colors.Primary
                          : constants.Colors.Gray,
                      },
                ]}
                source={
                  route.name === 'Home'
                    ? constants.Images.Home
                    : route.name === 'Blog'
                    ? constants.Images.Blog
                    : route.name === 'Directory'
                    ? constants.Images.Directory
                    : route.name === 'Chat'
                    ? constants.Images.Chat
                    : constants.Images.Profile
                }
              />
              <Text
                style={{
                  color: focused
                    ? constants.Colors.Primary
                    : constants.Colors.Gray,
                  textAlign: 'center',
                }}>
                {route.name === 'Home'
                  ? AppStrings.Home
                  : route.name === 'Blog'
                  ? AppStrings.Blog
                  : route.name === 'Directory'
                  ? AppStrings.Directory
                  : route.name === 'Chat'
                  ? AppStrings.Chat
                  : AppStrings.Profile}
              </Text>
            </View>
          );
        },
        // tabBarBadge:
        //   route.name === 'Messages' ? (Message ? '' : undefined) : undefined,
        // tabBarBadgeStyle: {
        //   backgroundColor: constants.Colors.Light_Pink,
        //   marginTop: constants.Screen.Vertical(5),
        // },
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarItemStyle: {},
        tabBarIconStyle: {},
        tabBarStyle: {
          height: 70,
          paddingBottom: 5,
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Blog" component={Blog} />
      <Tab.Screen name="Directory" component={Directory} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
