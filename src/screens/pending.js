import React from "react";
import { View, Text, FlatList } from "react-native";
import { store } from "../../App";
import { COLORS, FONTS } from "../constants";
import { Check, TrashAlt } from "../constants/icons";

const Pending = () => {
  const todos = store.getState().todos;

  const remainingTodos = todos.filter((todo) => todo.completed === false);

  function renderTodos() {
    const renderItem = ({ item }) => {
      return (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 24,
          }}
        >
          <Text
            style={{
              color: COLORS.textSeconday,
              ...FONTS.body2,
              lineHeight: 17,
              fontWeight: "600",
              width: 143,
            }}
          >
            {item.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 15,
                backgroundColor: "rgba(0, 184, 148, 0.2)",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Check />
            </View>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 15,
                backgroundColor: "rgba(214, 48, 49, 0.2)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TrashAlt />
            </View>
          </View>
        </View>
      );
    };

    return remainingTodos ? (
      <FlatList
        data={remainingTodos}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
      />
    ) : (
      <Text>No Todos Remaining</Text>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {renderTodos()}
    </View>
  );
};

export default Pending;
