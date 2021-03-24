import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Gallery, Posts, Todos } from "../screens";
import { getPosts } from "../actions/post";
import { store } from "../../App";

const Tab = createBottomTabNavigator();

const BottomNavTab = ({ route }) => {
  const { params } = route;

  const userId = params.userId;

  React.useEffect(() => {
    store.dispatch(getPosts(userId));
  }, [route]);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Posts">{() => <Posts userID={userId} />}</Tab.Screen>
      <Tab.Screen name="Gallery" component={Gallery} />
      <Tab.Screen name="Todos" component={Todos} />
    </Tab.Navigator>
  );
};

export default BottomNavTab;
