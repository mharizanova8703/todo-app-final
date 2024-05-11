import React from "react";
import { Item, ItemText } from "./styles";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function ToDoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Item>
        <MaterialIcons name="delete" size={18} color="#333" />
        <ItemText>{item.text}</ItemText>
      </Item>
    </TouchableOpacity>
  );
}

