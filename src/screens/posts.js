import React from "react";
import { ScrollView, Text, View } from "react-native";
import { store } from "../../App";
import { getPosts } from "../actions/post";
import { Navbar } from "../components";
import { COLORS, FONTS } from "../constants";
import { DocumentIcon } from "../constants/icons";

const Posts = ({ userId }) => {
  const posts = store.getState().posts;

  function renderPosts() {
    const randomBackground = (postId) => {
      if (
        postId === 1 ||
        postId === 11 ||
        postId === 21 ||
        postId === 31 ||
        postId === 41 ||
        postId === 51 ||
        postId === 61 ||
        postId === 71 ||
        postId === 81 ||
        postId === 91
      ) {
        return "rgba(0, 184, 148, 0.2)";
      } else if (
        postId === 2 ||
        postId === 12 ||
        postId === 22 ||
        postId === 32 ||
        postId === 42 ||
        postId === 52 ||
        postId === 62 ||
        postId === 72 ||
        postId === 82 ||
        postId === 92
      ) {
        return "rgba(9, 132, 227, 0.2)";
      } else if (
        postId === 3 ||
        postId === 13 ||
        postId === 23 ||
        postId === 33 ||
        postId === 43 ||
        postId === 53 ||
        postId === 63 ||
        postId === 73 ||
        postId === 83 ||
        postId === 93
      ) {
        return "rgba(232, 67, 147, 0.2)";
      } else if (
        postId === 4 ||
        postId === 14 ||
        postId === 24 ||
        postId === 34 ||
        postId === 44 ||
        postId === 54 ||
        postId === 64 ||
        postId === 74 ||
        postId === 84 ||
        postId === 94
      ) {
        return "rgba(0, 206, 201, 0.2)";
      } else if (
        postId === 5 ||
        postId === 15 ||
        postId === 25 ||
        postId === 35 ||
        postId === 45 ||
        postId === 55 ||
        postId === 65 ||
        postId === 75 ||
        postId === 85 ||
        postId === 95
      ) {
        return "rgba(108, 92, 231, 0.2)";
      } else if (
        postId === 6 ||
        postId === 16 ||
        postId === 26 ||
        postId === 36 ||
        postId === 46 ||
        postId === 56 ||
        postId === 66 ||
        postId === 76 ||
        postId === 86 ||
        postId === 96
      ) {
        return "rgba(225, 112, 85, 0.2)";
      } else if (
        postId === 7 ||
        postId === 17 ||
        postId === 27 ||
        postId === 37 ||
        postId === 47 ||
        postId === 57 ||
        postId === 67 ||
        postId === 77 ||
        postId === 87 ||
        postId === 97
      ) {
        return "rgba(253, 203, 110, 0.2)";
      }
      return "rgba(45, 52, 54, 0.2)";
    };

    const randomDocument = (postId) => {
      if (postId === 1 || postId === 11 || postId === 21 || postId === 41) {
        return "#00B894";
      } else if (
        postId === 2 ||
        postId === 12 ||
        postId === 22 ||
        postId === 32 ||
        postId === 42 ||
        postId === 52 ||
        postId === 62 ||
        postId === 72 ||
        postId === 82 ||
        postId === 92
      ) {
        return "#0984E3";
      } else if (
        postId === 3 ||
        postId === 13 ||
        postId === 23 ||
        postId === 33 ||
        postId === 43 ||
        postId === 53 ||
        postId === 63 ||
        postId === 73 ||
        postId === 83 ||
        postId === 93
      ) {
        return "#E84393";
      } else if (
        postId === 4 ||
        postId === 14 ||
        postId === 24 ||
        postId === 34 ||
        postId === 44 ||
        postId === 54 ||
        postId === 64 ||
        postId === 74 ||
        postId === 84 ||
        postId === 94
      ) {
        return "#00CEC9";
      } else if (
        postId === 5 ||
        postId === 15 ||
        postId === 25 ||
        postId === 35 ||
        postId === 45 ||
        postId === 55 ||
        postId === 65 ||
        postId === 75 ||
        postId === 85 ||
        postId === 95
      ) {
        return "#6C5CE7";
      } else if (
        postId === 6 ||
        postId === 16 ||
        postId === 26 ||
        postId === 36 ||
        postId === 46 ||
        postId === 56 ||
        postId === 66 ||
        postId === 76 ||
        postId === 86 ||
        postId === 96
      ) {
        return "#E17055";
      } else if (
        postId === 7 ||
        postId === 17 ||
        postId === 27 ||
        postId === 37 ||
        postId === 47 ||
        postId === 57 ||
        postId === 67 ||
        postId === 77 ||
        postId === 87 ||
        postId === 97
      ) {
        return "#FDCB6E";
      }
      return "#2D3436";
    };

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 32 }}
      >
        {posts ? (
          posts.map((post) => (
            <View
              key={post.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 32,
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: randomBackground(post.id),
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 21,
                }}
              >
                <DocumentIcon style={{ color: randomDocument(post.id) }} />
              </View>
              <Text
                style={{
                  marginLeft: 18,
                  color: COLORS.text,
                  ...FONTS.h3,
                  width: 249,
                  fontWeight: "500",
                  lineHeight: 24,
                }}
              >
                {post.title}
              </Text>
            </View>
          ))
        ) : (
          <Text style={{ alignSelf: "center", marginTop: 50 }}>No Posts</Text>
        )}
      </ScrollView>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 24,
      }}
    >
      <Navbar text="Posts" />

      {renderPosts()}
    </View>
  );
};

export default Posts;
