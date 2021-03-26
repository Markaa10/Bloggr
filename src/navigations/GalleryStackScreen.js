import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Gallery, Photos } from "../screens";

const GalleryStack = createStackNavigator();

const GalleryStackScreen = () => {
  return (
    <GalleryStack.Navigator initialRouteName="Gallery">
      <GalleryStack.Screen
        name="Gallery"
        component={Gallery}
        options={{ headerShown: false }}
      />
      <GalleryStack.Screen
        name="Photos"
        component={Photos}
        options={{ headerShown: false }}
      />
    </GalleryStack.Navigator>
  );
};

export default GalleryStackScreen;
