import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text } from "react-native";
import { COLORS, FONTS } from "../constants";
import { HomeIcon } from "../constants/icons";

const Navbar = ({ text }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 40,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            ...FONTS.h1,
            color: COLORS.text,
            fontWeight: "300",
            lineHeight: 36.9,
          }}
        >
          All
        </Text>
        <Text
          style={{
            ...FONTS.h1,
            color: COLORS.text,
            fontWeight: "700",
            lineHeight: 38.69,
            marginLeft: 8,
          }}
        >
          {text}
        </Text>
      </View>

      <HomeIcon onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Navbar;
