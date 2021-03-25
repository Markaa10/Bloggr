import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { store } from "../../App";
import { PostDetail, Posts } from "../screens";

const PostStack = createStackNavigator();

const PostStackScreen = () => {
  return (
    <PostStack.Navigator initialRouteName="Posts">
      <PostStack.Screen
        name="Posts"
        component={Posts}
        options={{ headerShown: false }}
      />
      <PostStack.Screen
        name="PostDetail"
        component={PostDetail}
        options={{ headerShown: false }}
      />
    </PostStack.Navigator>
  );
};

export default PostStackScreen;
