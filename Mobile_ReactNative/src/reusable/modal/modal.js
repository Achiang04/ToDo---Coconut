import React, {useState} from 'react';
import {Modal, TextInput, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {v4 as uuidv4} from 'uuid';

import styles from './modalStyle';

export default function App({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  const [todoDescription, setTodoDescription] = useState('');

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
      console.log('success add');
    } catch (e) {
      console.log(e);
    }
  };

  const pushdata = async (newTodo, todoDescription) => {
    let temp = await AsyncStorage.getItem('@storage_Key').then((item) =>
      JSON.parse(item),
    );
    const id = uuidv4();
    console.log('temp 1', temp);
    if (temp === null) {
      temp = {
        item: [],
      };
    }
    temp.item.push({
      id: id,
      todo: newTodo,
      description: todoDescription,
      done: false,
    });

    console.log('temp 2', temp);
    storeData(temp);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>New Todo</Text>
            <TextInput
              style={styles.kolomRespon1}
              placeholder={'Todo ...'}
              onChangeText={(e) => setNewTodo(e)}
            />
            <TextInput
              multiline
              style={styles.kolomRespon2}
              placeholder={'Todo Description ...'}
              textAlignVertical={'top'}
              onChangeText={(e) => setTodoDescription(e)}
            />
            <TouchableOpacity
              style={styles.create}
              onPress={() => {
                setModalVisible(!modalVisible),
                  pushdata(newTodo, todoDescription);
              }}>
              <Text style={styles.textButton}>Create</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textButton}>New Todo</Text>
      </TouchableOpacity>
    </View>
  );
}
