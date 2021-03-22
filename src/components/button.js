import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "../constants";
import { Profile } from "../constants/icons";

const Button = ({ text, backgroundColor, style, icon, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        marginTop: 40,
        width: 191,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 21,
        backgroundColor: backgroundColor,
        flexDirection: "row",
        ...style,
      }}
      onPress={onPress}
    >
      {icon && <Profile style={{ marginRight: 10.25 }} />}
      <Text
        style={{
          color: COLORS.primary,
          ...FONTS.body2,
          lineHeight: 20,
          fontWeight: "600",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
