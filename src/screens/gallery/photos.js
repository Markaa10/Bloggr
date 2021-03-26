import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS } from "../../constants";
import { ArrowLeft } from "../../constants/icons";

const Photos = ({ navigation }) => {
  function renderHeader() {
    return (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginTop: 40, flexDirection: "row" }}
      >
        <ArrowLeft />
        <Text
          style={{
            color: COLORS.primary,
            ...FONTS.h3,
            lineHeight: 21,
            fontWeight: "600",
            marginLeft: 10,
          }}
        >
          Go Back
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={{ flex: 1, paddingHorizontal: 24, backgroundColor: COLORS.white }}
    >
      {renderHeader()}

      <Text>Photos</Text>
    </View>
  );
};

export default Photos;
