import React from "react";
import { Text, View } from "react-native";
import { COLORS, FONTS } from "../constants";
import { HomeIcon } from "../constants/icons";

const Users = () => {
  function renderTitle() {
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
            Bloggrs
          </Text>
        </View>

        <HomeIcon />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, paddingHorizontal: 24 }}>{renderTitle()}</View>
  );
};

export default Users;
