import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

export default function App() {

  const [value, updateValue] = useState("");

  const [todos, setTodos] = useState([]);

  const handleChange = (newVal) => {
    updateValue(newVal);
  };

  const addTodo = () => {
    let tempObj = {
      id: Math.random().toString(),
      value: value,
      isShowInput: false,
    };
    setTodos([...todos, tempObj]);
    updateValue("");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AddTodo value={value} handleChange={handleChange} addTodo={addTodo} />
      <TodoList todos={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    marginVertical: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    width: "80%",
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    marginHorizontal: 10,
  },
  todowrapper : {
    flexDirection: "row",
    alignItems: "center",
    marginVertical:10,
  }
});
