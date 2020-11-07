import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

const AddTodo = ({value , handleChange, addTodo}) => {
    return (
        <View style={styles.addTodo}>
            <TextInput style={styles.input} placeholder="Add Todo" value={value} onChangeText={handleChange} />
            <Button onPress={addTodo} color="red" title="Add Todo" />
        </View>
    );
}

const styles = StyleSheet.create({
    addTodo: {
      flexDirection: "row",
      alignItems: 'center',
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
  });

export default AddTodo;