import React, {useState} from 'react';

import {StyleSheet, View, Alert} from 'react-native';
import SaveTodo from './components/SaveTodo';
import TodoCounter from './components/TodoCounter';
import TodoList from './components/TodoList';

const App = () => {
  //Ekleme işleminin değişimini kontrol eden state//
  const [todo, setTodo] = useState('');
  //Yapılacaklar listeni tutan state//
  const [list, setList] = useState([]);

  const saveTodo = () => {
    if (todo.length > 0) {
      const newTodo = {
        id: Math.random(), //id ekleme sebebim id'ye göre silme işlemi yapılıyor//
        text: todo,
        isDone: false, //eklenen iş yapılmadığı için default değeri false//
      };
      setList([newTodo, ...list]);
      setTodo('');
    } else {
      Alert.alert('Boş bir ekleme yapamazsınız...');
    }
  };

  return (
    <View style={styles.container}>
      <TodoCounter list={list} />
      <TodoList todoList={list} setList={setList} />
      <SaveTodo setTodo={setTodo} saveTodo={saveTodo} text={todo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#85586F',
  },
});

export default App;
