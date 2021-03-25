import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../constants";

const Completed = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Text>Completed</Text>
    </View>
  );
};

export default Completed;
