import React from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const AddTodo = ({ value, handleChange, addTodo, issAddMode , setissAddMode, updateValue}) => {

    const handleUpdate = () => {
        updateValue("");
        setissAddMode(false);
    };

    return (
        <Modal visible={issAddMode} animationType="slide">
            <View style={styles.addTodo}>
                <TextInput style={styles.input} placeholder="Add Todo" value={value} onChangeText={handleChange} />
                <View style={styles.btnwrapper}>
                    <View style={styles.addbtn}>
                        <Button onPress={addTodo} color="red" title="Add Todo" />
                    </View>
                    <View style={styles.cancelbtn}>
                        <Button onPress={handleUpdate} color="red" title="Cancel" />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    addTodo: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,

    },
    input: {
        width: "75%",
        marginBottom: 20,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        marginHorizontal: 10,
    },
    btnwrapper : {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    addbtn : {
        marginHorizontal:10,
    },
    cancelbtn : {
        marginHorizontal:10,
    }
});

export default AddTodo;