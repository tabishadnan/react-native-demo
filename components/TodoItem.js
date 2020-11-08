import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const TodoItem = ({ todo, removeTodo }) => {

    return (
        <TouchableOpacity onPress={() => removeTodo(todo.index)}>
            <Text style={styles.todo}>{todo.item.value}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    todo: {
        marginVertical: 10,
        padding: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
    }
});

export default TodoItem;