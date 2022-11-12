import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#AC7D88',
    margin: 10,
    borderRadius: 20,
    height: '20%',
    padding: 10,
  },
  inputItem: {
    fontSize: 25,
    borderBottomWidth: 2,
    borderColor: '#85586F',
    color: 'F8ECD1',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    margin: 20,
    marginTop: 12,
    width: Dimensions.get('window').width * 0.8,
    borderRadius: 15,
    backgroundColor: '#85586F',
  },
  text: {
    fontSize: 25,
    color: '#F8ECD1',
  },
  button_hover: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    margin: 20,
    marginTop: 12,
    width: Dimensions.get('window').width * 0.8,
    borderRadius: 15,
    backgroundColor: '#497174',
  },
});
