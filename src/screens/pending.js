import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../constants";

const Pending = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Text>Pending</Text>
    </View>
  );
};

export default Pending;
