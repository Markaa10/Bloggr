import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeScreen, MyResumeScreen} from '../screens';

const RootStack = createNativeStackNavigator({
  screens: {Home: HomeScreen, Resume: MyResumeScreen},
  screenOptions: {headerShown: false},
});

const RootNavigation = createStaticNavigation(RootStack);

const AppNavigation = () => {
  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
