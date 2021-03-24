import React from "react";
import { View, Text } from "react-native";
import { Navbar } from "../components";
import { COLORS } from "../constants";

const Todos = () => {
  return (
    <View
      style={{ flex: 1, paddingHorizontal: 24, backgroundColor: COLORS.white }}
    >
      <Navbar lightText="Your" text="Todo List" />

      
    </View>
  );
};

export default Todos;
