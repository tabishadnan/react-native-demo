import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({todos , removeTodo}) => {
    return (
        <FlatList
            data={todos}
            keyExtractor={(item, index) => item.id}
            renderItem={(todo) => <TodoItem todo={todo} removeTodo={removeTodo} />}
        />
    );
};

export default TodoList;