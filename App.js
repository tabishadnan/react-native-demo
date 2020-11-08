import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

export default function App() {

  const [value, updateValue] = useState("");

  const [todos, setTodos] = useState([]);

  const [issAddMode, setissAddMode] = useState(false);

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
    setissAddMode(false);
  };

  const removeTodo = (rindex) => {
    let todoArrCopy = [...todos];
    todoArrCopy.splice(rindex, 1);
    setTodos(todoArrCopy);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {!issAddMode && <View style={styles.AddMode}>
        <Button onPress={() => setissAddMode(true)} title="Add Todo" color="red" />
      </View>}
      <AddTodo value={value} handleChange={handleChange}
       addTodo={addTodo} 
       issAddMode={issAddMode} 
       setissAddMode={setissAddMode}
       updateValue={updateValue}
        />
      <TodoList todos={todos}
      removeTodo={removeTodo}
      />
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
  todowrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  }, 
  AddMode : {
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 50,
  }
});
