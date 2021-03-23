import React from "react";
import { Text, View } from "react-native";

const Posts = ({ route }) => {
  const { params } = route;

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Posts</Text>

      {console.log(params.userId)}
    </View>
  );
};

export default Posts;
