/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


/*Example of Navigation Drawer with Sectioned Menu*/
import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
  YellowBox,
  Dimensions,
  Button,
  ScrollView,
} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';

//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';


//Import all the screens
import Screen1 from '././components/Screen1';
import Screen2 from '././components/Screen2';
import Screen3 from '././components/Screen3';

import Login from '././components/Login';



//Import custom Drawer / sidebar
import SideMenu from './components/SideMenu';

//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {

  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./assets/menu.png')}
            style={styles.navbar}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 
//Stack Navigator for the First Option of Navigation Drawer
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the First Option will be indexed here
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#673ab7',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//Stack Navigator for the Second Option of Navigation Drawer
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#673ab7',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//Stack Navigator for the Third Option of Navigation Drawer
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 3',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#673ab7',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//Drawer Navigator for the Navigation Drawer / Sidebar
const Drawer = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    NavScreen1: { screen: FirstActivity_StackNavigator },
    NavScreen2: { screen: Screen2_StackNavigator },
    NavScreen3: { screen: Screen3_StackNavigator },
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,   
    drawerPosition:"right"
  }
);

const AuthNavigator = createStackNavigator(
  {
    Login: Login,
  },
  {
    navigationOptions: {
      header: null,
    },
  }
);

const AppNavigator = createSwitchNavigator(
  {
    //  Splash: {
    //    getScreen: () => require('./SplashScreen').default,
    //  },
     Auth: AuthNavigator,
     Main: Drawer,
   },
   {
     initialRouteName: 'Main',
   },
 );


const MyApp = createAppContainer(AppNavigator);



class App extends React.Component {
  render() {
    return (     
        <View style={{ flex: 1 }}>
          <MyApp/>
        </View>      
    );
  }
}


const styles = StyleSheet.create({
  navbar: {
    width: 25,
    height: 25, 
    marginLeft: 15,   
  },
});

export default App;
