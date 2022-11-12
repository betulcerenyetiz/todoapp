import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    minHeight: '65%',
  },
  todo_content: {
    margin: 10,
    padding: 15,
    backgroundColor: '#B2B8A3',
    borderRadius: 10,
  },
  todoItem: {
    color: '#F8ECD1',
    fontSize: 20,
  },
  todo_true: {
    backgroundColor: '#99A799',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    color: '#393232',
    fontSize: 20,
    textDecorationLine: 'line-through',
  },
  todoItem_true: {
    color: '#99A799',
  },
});
