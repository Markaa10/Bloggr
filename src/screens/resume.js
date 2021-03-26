import React from "react";
import { View } from "react-native";
import { Navbar } from "../components";
import { COLORS } from "../constants";

const Resume = () => {
  return (
    <View
      style={{ flex: 1, paddingHorizontal: 24, backgroundColor: COLORS.white }}
    >
      <Navbar lightText="My" text="Resume" />
    </View>
  );
};

export default Resume;
