import React from 'react';
import { Text, FlatList } from 'react-native';

const TodoList = ({todos}) => {
    return (
        <FlatList
            data={todos}
            keyExtractor={(item, index) => item.id}
            renderItem={todo => <Text>{todo.item.value}</Text>}
        />
    );
}

export default TodoList;