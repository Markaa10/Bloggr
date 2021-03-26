import React from "react";
import { Home, Posts, Resume, Users } from "./src/screens";

import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { applyMiddleware, compose, createStore } from "redux";
import { reducers } from "./src/reducers";
import { Provider } from "react-redux";
import { getUsers } from "./src/actions/user";
import thunk from "redux-thunk";
import { BottomNavTab } from "./src/navigations";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

export const store = createStore(reducers, compose(applyMiddleware(thunk)));

const App = () => {
  store.dispatch(getUsers());

  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={"Home"}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Resume" component={Resume} />
          <Stack.Screen name="Users" component={Users} />
          <Stack.Screen name="BottomNavTab" component={BottomNavTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
