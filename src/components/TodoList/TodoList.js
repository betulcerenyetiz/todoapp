import React from 'react';
import {View, Text} from 'react-native';
import styles from './TodoList.styles';
const TodoList = ({todoList, setList}) => {
  //bir kere basıldığın yapıldı işlevini veren func.//
  const changeIsDone = id => {
    const newList = todoList.map(todo =>
      todo.id === id ? {...todo, isDone: !todo.isDone} : todo,
    );
    setList(newList);
  };
  //basılı tututlduğunda silen func.//
  const deleteTodo = id => {
    const newList = todoList.filter(todo => todo.id !== id);
    setList(newList);
  };
  //yapılıp yapılmadığına göre style özellikleri değişiyor//
  return (
    <View style={styles.container}>
      {todoList.map(item => (
        <View
          style={item.isDone ? styles.todoItem_true : styles.todo_content}
          key={item.id}>
          <Text
            style={item.isDone ? styles.todo_true : styles.todoItem}
            onPress={() => changeIsDone(item.id)}
            onLongPress={() => deleteTodo(item.id)}>
            {item.text}
          </Text>
        </View>
      ))}
    </View>
  );
};
export default TodoList;