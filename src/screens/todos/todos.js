import React from "react";
import { View, Text } from "react-native";
import { store } from "../../../App";
import { Navbar } from "../../components";
import { COLORS } from "../../constants";
import { Plus } from "../../constants/icons";
import { TopTabNavigator } from "../../navigations";

const Todos = () => {
  const todos = store.getState().todos;

  function renderFAB() {
    return (
      <View
        style={{
          backgroundColor: COLORS.primary,
          width: 72,
          height: 72,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 28,
          elevation: 15,
          shadowRadius: 50,
          shadowColor: "rgba(9, 132, 227, 0.5)",
          shadowOffset: 15,
          position: "absolute",
          bottom: 24,
          right: 24,
        }}
      >
        <Plus width={21} height={32} />
      </View>
    );
  }

  return (
    <View
      style={{ flex: 1, paddingHorizontal: 24, backgroundColor: COLORS.white }}
    >
      <Navbar lightText="Your" text="Todo List" />

      <TopTabNavigator todos={todos} />

      {renderFAB()}
    </View>
  );
};

export default Todos;
