import React, { useState } from "react";
import {
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import AddNewItem from "./components/AddNewItem";
import { Container, Content, List, SafeAreaContainer } from "./styles";

export default function App() {
  const [toDos, setToDos] = useState([
    { text: "go to the gym", key: 0 },
    { text: "buy some food", key: 1 },
    { text: "create an app", key: 2 },
    { text: "do code review", key: 3 },
  ]);

  const pressHandler = (key) => {
    setToDos((prevTodos) => {
      return prevTodos.filter((toDo) => toDo.key != key);
    });
  };

  //New State
  const submitHandler = (text) => {
    if (text.length > 3) {
      setToDos((prevToDos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevToDos];
      });
    } else {
      Alert.alert("Oops!", "ToDos Must be over 3 chars long", [
        { text: "OK!", onPress: () => console.log("Alert closed") },
      ]);
    }
  };

  return (
    <SafeAreaContainer>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          console.log("dismissed keyboard");
        }}
      >
        <Container>
          <Header />
          <Content>
            <AddNewItem submitHandler={submitHandler} />
            <List>
              <FlatList
                data={toDos}
                renderItem={({ item }) => (
                  <ToDoItem item={item} pressHandler={pressHandler} />
                )}
              />
            </List>
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </SafeAreaContainer>
  );
}
