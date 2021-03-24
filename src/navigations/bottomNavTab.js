import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Gallery, Posts, Todos } from "../screens";
import { getPosts } from "../actions/post";
import { store } from "../../App";
import { COLORS } from "../constants";
import { DocumentIcon, GalleryIcon, TodoIcon } from "../constants/icons";

const Tab = createBottomTabNavigator();

const BottomNavTab = ({ route }) => {
  const { params } = route;
  const userId = params.userId;

  const tabBarOptions = {
    inactiveTintColor: COLORS.text,
    showLabel: false,
  };

  React.useEffect(() => {
    store.dispatch(getPosts(userId));
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
        component={Gallery}
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
