import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';

import UserList from '../screens/users/list';
import UserDetails from '../screens/users/details';
import Colors from '../assets/Colors';
import Fonts from '../assets/Fonts';

const RootStack = createStackNavigator();

export default () => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={{flex: 1}} edges={['bottom']}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: Colors.WHITE,
          headerTitleStyle: {
            fontFamily: Fonts.main.semibold
          },
          headerStyle: {
            backgroundColor: Colors.PRIMARY_BACKGROUND,
            elevation: 0,
          },
        }}
        initialRouteName="UserList">
        <RootStack.Screen
          name="UserList"
          component={UserList}
          options={{title: 'Users'}}
        />
        <RootStack.Screen
          name="UserDetails"
          component={UserDetails}
          options={{title: 'User Details'}}
        />
      </RootStack.Navigator>
    </SafeAreaView>
  );
};
