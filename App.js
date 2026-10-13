import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('TEXT');
  const [taskList, setTaskList] = useState([]);
  function inputHandler(text) {
    setText(text);
  }
  function addHandler() {
    setTaskList([...taskList, text]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Zadaj:" onChangeText={inputHandler}></TextInput>
        <Button onPress = {addHandler} title="ADD" />
      </View>
      <View style={styles.taskContainer}>
        {taskList.map((task, index) => (
          <Text style={styles.taskText} key={index}>{task}</Text>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  input: {
    borderWidth: 5,
    borderRadius: 8,
    borderColor: 'red',
    width: '80%',
},
  inputContainer: {
  flex: 1,
  backgroundColor: 'green',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  paddingHorizontal: 20,
},
  taskContainer: {flex: 3, backgroundColor: 'Blue', borderTopWidth: 3, padding: 20,},
  taskText: {backgroundColor: 'white', margin: 10, borderRadius: 5,},
});