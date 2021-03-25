import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS } from "../constants";
import { ArrowLeft, Profile } from "../constants/icons";

const PostDetail = ({ navigation, route }) => {
  const post = route.params.post;

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

  function renderPostDetail() {
    return post ? (
      <View style={{ marginTop: 22 }}>
        <Text
          style={{
            color: COLORS.text,
            ...FONTS.h2,
            lineHeight: 32,
            fontWeight: "600",
          }}
        >
          {post.title}
        </Text>

        <View
          style={{ marginTop: 32, flexDirection: "row", alignItems: "center" }}
        >
          <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 12,
              backgroundColor: "rgba(0, 184, 148, 0.2)",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 8,
            }}
          >
            <Profile style={{ color: "#00B894" }} />
          </View>
          <Text
            style={{
              color: "#AAAAAA",
              ...FONTS.body2,
              lineHeight: 17,
              fontWeight: "600",
            }}
          >
            by
          </Text>
          <Text
            style={{
              marginLeft: 2,
              color: "#AAAAAA",
              ...FONTS.body2,
              lineHeight: 17,
              fontWeight: "bold",
            }}
          >
            {post.userId}
          </Text>
        </View>

        <Text
          style={{
            marginTop: 32,
            color: COLORS.text,
            ...FONTS.body1,
            lineHeight: 24,
            fontWeight: "500",
          }}
        >
          {post.body}
        </Text>

        <Text
          style={{
            marginTop: 37,
            color: COLORS.text,
            ...FONTS.body1,
            lineHeight: 24,
            fontWeight: "600",
          }}
        >
          All Comments
        </Text>
      </View>
    ) : (
      <Text> Loading...</Text>
    );
  }

  return (
    <View
      style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 24 }}
    >
      {renderHeader()}

      {renderPostDetail()}
    </View>
  );
};

export default PostDetail;
