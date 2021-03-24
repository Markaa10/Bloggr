import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Gallery, Posts, Todos } from "../screens";
import { getPosts } from "../actions/post";
import { store } from "../../App";
import { COLORS } from "../constants";
import { DocumentIcon, GalleryIcon, TodoIcon } from "../constants/icons";
import { getAlbums } from "../actions/gallery";

const Tab = createBottomTabNavigator();

const BottomNavTab = ({ route }) => {
  const { params } = route;
  const userId = params.userId;

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

  React.useEffect(() => {
    store.dispatch(getPosts(userId));
    store.dispatch(getAlbums(userId));
  }, [route]);

  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Posts"
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
      >
        {() => <Posts userID={userId} />}
      </Tab.Screen>
      <Tab.Screen
        name="Gallery"
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
      >
        {() => <Gallery userId={userId} />}
      </Tab.Screen>
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
