import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  AllBloggersScreen,
  HomeScreen,
  MyResumeScreen,
  PostDetailsScreen,
  UserPostsScreen,
} from '../screens';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Resume: MyResumeScreen,
    AllBloggrs: AllBloggersScreen,
    AllPosts: {
      screen: UserPostsScreen,
      initialParams: {userId: 1},
    },
    PostDetails: {
      screen: PostDetailsScreen,
      initialParams: {postId: 1},
    },
  },
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
