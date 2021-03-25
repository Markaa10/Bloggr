import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { store } from "../../App";
import { getComments } from "../actions/post";
import { COLORS, FONTS } from "../constants";
import { ArrowLeft, Profile } from "../constants/icons";

const PostDetail = ({ navigation, route }) => {
  const post = route.params.post;

  const postId = post.id;

  React.useEffect(() => {
    store.dispatch(getComments(postId));
  }, []);

  const comments = store.getState().comments;

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
    function renderComments() {
      const renderItem = ({ item }) => {
        return (
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              marginBottom: 12,
              marginTop: 12,
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 14,
                backgroundColor: "rgba(108, 92, 231, 0.2)",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 8,
              }}
            >
              <Profile style={{ color: "#6C5CE7" }} />
            </View>
            <View>
              <Text
                style={{
                  color: COLORS.textSeconday,
                  ...FONTS.body2,
                  lineHeight: 17,
                  fontWeight: "600",
                  marginBottom: 1,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  color: "#AAAAAA",
                  ...FONTS.body3,
                  lineHeight: 14,
                  fontWeight: "600",
                  marginBottom: 8,
                }}
              >
                {item.email}
              </Text>
              <Text
                style={{
                  color: COLORS.text,
                  ...FONTS.body2,
                  lineHeight: 20,
                  fontWeight: "600",
                }}
              >
                {item.body}
              </Text>
            </View>
          </View>
        );
      };

      return comments ? (
        <FlatList
          data={comments}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={{ alignSelf: "center", marginTop: 20, ...FONTS.h2 }}>
          No comments for the post
        </Text>
      );
    }

    return post ? (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 22 }}
      >
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

        {renderComments()}
      </ScrollView>
    ) : (
      <Text style={{ alignSelf: "center" }}> Loading...</Text>
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
