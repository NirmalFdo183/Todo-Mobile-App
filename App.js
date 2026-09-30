import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View ,Pressable } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [todos, setTodo] = useState([]);

  const addTodo = () => {
    if (text.trim() !== '') {
      setTodo([...todos, text]);
      setText('');
    }
  };

  console.log(todos);

  return (
    <View style={styles.container}>
      <View style={styles.addTodo}>
        <TextInput style={styles.todoInput} value={text} onChangeText={setText}/>
        <Pressable style={styles.addButton}  onPress={addTodo}><Text style={styles.buttonText}>Add</Text></Pressable>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoInput: {
    borderColor: '#0733e4',
    borderWidth: 2,
  },
  addTodo: {
    flexDirection: 'row',
    gap: 10,
  },
  addButton: {
    backgroundColor: '#0733e4',
    borderRadius: 2,
    padding: 10,
    color: '#ffffff',
  },
  buttonText: {
    color: '#ffffff',
  },
  
});
