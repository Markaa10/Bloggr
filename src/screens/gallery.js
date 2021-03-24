import React from "react";
import { View, Text, FlatList } from "react-native";
import { store } from "../../App";
import { Navbar } from "../components";
import { COLORS, FONTS, SIZES } from "../constants";

const Gallery = () => {
  const albums = store.getState().albums;

  function renderAlbums() {
    const renderItem = ({ item, index }) => {
      const randomBackground = (index) => {
        if (index === 1) {
          return "rgba(0, 184, 148, 0.2)";
        } else if (index === 2) {
          return "rgba(9, 132, 227, 0.2)";
        } else if (index === 3) {
          return "rgba(232, 67, 147, 0.2)";
        } else if (index === 4) {
          return "rgba(0, 206, 201, 0.2)";
        } else if (index === 5) {
          return "rgba(108, 92, 231, 0.2)";
        } else if (index === 6) {
          return "rgba(225, 112, 85, 0.2)";
        } else if (index === 7) {
          return "rgba(253, 203, 110, 0.2)";
        }
        return "rgba(45, 52, 54, 0.2)";
      };

      return (
        <View
          style={{
            width: 155,
            marginRight: index % 2 === 0 ? 17 : 0,
            marginLeft: index % 2 === 0 ? 0 : 17,
            marginBottom: 17,
          }}
        >
          <View
            style={{
              width: 155,
              height: 203,
              borderRadius: 21,
              backgroundColor: randomBackground(index),
              marginBottom: 8,
            }}
          />
          <Text
            style={{
              ...FONTS.body2,
              color: COLORS.textSeconday,
              fontWeight: "600",
              lineHeight: 17,
              width: 155,
            }}
            numberOfLines={2}
          >
            {item.title}
          </Text>
        </View>
      );
    };

    return (
      <View style={{ marginTop: 32, marginBottom: 75 }}>
        {!albums.length ? (
          <Text>No Albums Rendered</Text>
        ) : (
          <FlatList
            data={albums}
            renderItem={renderItem}
            numColumns={2}
            keyExtractor={(item) => `${item.id}`}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    );
  }

  return (
    <View
      style={{ flex: 1, paddingHorizontal: 24, backgroundColor: COLORS.white }}
    >
      <Navbar lightText="All" text="Albums" />

      {renderAlbums()}
    </View>
  );
};

export default Gallery;
