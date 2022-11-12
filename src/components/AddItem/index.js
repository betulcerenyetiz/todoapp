import React from 'react';
import {View, TextInput, Button} from 'react-native';
import styles from './styles';

const AddItem = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputItem}
                placeholder="Yapılacak..."
                placeholderTextColor="#808080"
                value={text}
                onChangeText={(text)=>setTodo(text)}
            ></TextInput>
            <Pressable style={text.length>0 ? styles.button_hover : styles.button} onPress={handleSaveTodo}>
                <Text style={styles.text}>Kaydet</Text>
            </Pressable>
        </View>
    )
};

export {AddItem};
