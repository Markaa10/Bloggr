import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Gallery, Posts, Todos } from "../screens";
import { getPosts } from "../actions/post";
import { store } from "../../App";
import { COLORS } from "../constants";
import { DocumentIcon, GalleryIcon, TodoIcon } from "../constants/icons";
import { getAlbums } from "../actions/gallery";
import { getTodos } from "../actions/todo";
import { GalleryStackScreen, PostStackScreen } from "./";

const Tab = createBottomTabNavigator();

const BottomNavTab = ({ route }) => {
  const { params } = route;
  const userId = params.user.id;

  React.useEffect(() => {
    store.dispatch(getPosts(userId));
    store.dispatch(getAlbums(userId));
    store.dispatch(getTodos(userId));
  }, [route]);

  const tabBarOptions = {
    inactiveTintColor: COLORS.text,
    showLabel: false,
    style: {
      maxHeight: 72,
      height: "100%",
      shadowRadius: 15,
      shadowColor: "rgba(143, 143, 143, 0.25)",
      shadowOffset: 5,
    },
  };

  return (
    <Tab.Navigator initialRouteName="Posts" tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="PostStackScreen"
        component={PostStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <DocumentIcon
              style={{
                color: focused ? COLORS.text : COLORS.textSeconday,
                opacity: focused ? 1 : 0.4,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="GalleryStackScreen"
        component={GalleryStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <GalleryIcon
              style={{
                color: focused ? COLORS.text : COLORS.textSeconday,
                opacity: focused ? 1 : 0.4,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Todos"
        component={Todos}
        options={{
          tabBarIcon: ({ focused }) => (
            <TodoIcon
              style={{
                color: focused ? COLORS.text : COLORS.textSeconday,
                opacity: focused ? 1 : 0.4,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavTab;
