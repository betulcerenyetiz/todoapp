import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './SaveTodo.styles';
const SaveTodo = ({setTodo, saveTodo, text}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputItem}
        placeholder="Yapılacak..."
        placeholderTextColor="#85586F"
        value={text}
        onChangeText={text => setTodo(text)}
      />
      <TouchableOpacity
        style={text.length > 0 ? styles.button_hover : styles.button}
        onPress={saveTodo}>
        <Text style={styles.text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SaveTodo;
