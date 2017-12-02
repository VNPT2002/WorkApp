import React, { Component } from 'react';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';

import Home from './src/screens/Home';
import WorkIsLate from './src/screens/WorkIsLate';

const AppStackNavigator = StackNavigator({
  Home: {
    screen: Home
  },
  WorkIsLate: {
    screen: WorkIsLate
  }
});

const AppTabNavigator = TabNavigator({
  Home: {
    screen: AppStackNavigator
  },
  WorkIsLate: {
    screen: WorkIsLate
  }
}, 
{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#5C6BC0',
  }
});

const MyApp = DrawerNavigator({
  Home: {
    screen: AppTabNavigator
  },
  WorkIsLate:{
    screen: WorkIsLate
  }
},
{
  drawerWidth: 300,
  drawerPosition: 'left'
});

export default MyApp;


