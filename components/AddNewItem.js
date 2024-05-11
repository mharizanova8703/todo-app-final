import React, { useState } from "react";
import { View, Button } from "react-native";
import { TextInputContainer } from "./styles";

export default function AddNewItem({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (value) => {
    setText(value);
  };

  return (
    <View>
      <TextInputContainer
        placeholder="new to-do..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="Add to-do"
        color="#db4dd9"
      />
    </View>
  );
}

