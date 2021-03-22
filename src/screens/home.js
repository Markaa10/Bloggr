import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { COLORS, FONTS } from "../constants";
import { Welcome } from "../constants/images";

const Home = () => {
  function renderTitle() {
    return (
      <View style={{ marginTop: 37.48, width: 179, height: 77 }}>
        <Text
          style={{
            color: COLORS.text,
            ...FONTS.h1,
            fontWeight: "300",
            lineHeight: 38.69,
          }}
        >
          Welcome to
        </Text>

        <Text
          style={{
            color: COLORS.text,
            ...FONTS.h1,
            fontWeight: "700",
            lineHeight: 38.9,
          }}
        >
          Bloggr
        </Text>
      </View>
    );
  }

  function renderWelcomeText() {
    return (
      <View style={{ marginTop: 20, width: 257, height: 96 }}>
        <Text
          style={{
            color: COLORS.textSeconday,
            ...FONTS.body1,
            lineHeight: 20,
            fontWeight: "500",
          }}
        >
          Bloggr allows you to disover your favorite bloggers and follow their
          writings and albums. We also have a dedicated todo application to keep
          you productive.
        </Text>
      </View>
    );
  }

  function renderButtons() {
    return (
      <View>
        <Text>Button</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 24,
        paddingVertical: 72,
      }}
    >
      <Welcome width={327.13} height={285.52} />

      <View style={{ marginHorizontal: 35 }}>
        {renderTitle()}

        {renderWelcomeText()}

        {renderButtons()}
      </View>
    </View>
  );
};

export default Home;
