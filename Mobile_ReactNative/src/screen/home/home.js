import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DeleteModal from '../../reusable/modal/deleteModal';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';

import styles from './homeStyle';
import {hp} from '../../reusable/responsive/dimen';
import Buttons from '../../reusable/Buttons/Buttons';
import {todoAction} from '../../redux/Actions/todoAction';

export default function home({navigation}) {
  const dispatch = useDispatch();

  const [selectedId, setSelectedId] = useState(null);
  const data = useSelector((state) => state.todoReducer.data);

  useEffect(() => {
    dispatch(todoAction());

    const unsubscribe = navigation.addListener(() => {
      dispatch(todoAction());
    });

    return () => {
      unsubscribe;
    };
  }, [navigation]);

  console.log('Data', data);

  const RenderTodoStorage = ({item, index}) => {
    let d = item.dueTime.slice(8, 10);
    let m = item.dueTime.slice(5, 7);
    let y = item.dueTime.slice(0, 4);
    let dateFormat = ` ${d} - ${m} - ${y}`;

    let time;
    if (item.dueTime === undefined || item.dueTime === '') {
      time = <Text>Date: -</Text>;
    } else {
      time = <Text>Date: {dateFormat}</Text>;
      // time = <Text>Date: {item.dueTime}</Text>;
    }

    let desc;
    if (item.description === undefined || item.description === '') {
      desc = <Text>Description: -</Text>;
    } else {
      desc = (
        <Text>
          Description: {'\n'}
          {item.description}
        </Text>
      );
    }

    console.log(index + 'dalam render ', item.lewat);
    let lewat;
    if (item.lewat) {
      lewat = (
        <View style={styles.lewatContainer}>
          <Text
            style={
              item.lewat ? styles.categoryTextSelected : styles.categoryText
            }>
            Missed
          </Text>
        </View>
      );
    }

    let category;
    if (item.category === undefined || item.category === '') {
      category = null;
    } else {
      category = (
        <View style={styles.categoryContainer}>
          <Text
            style={
              item.done ? styles.categoryTextSelected : styles.categoryText
            }>
            {item.category}
          </Text>
        </View>
      );
    }

    let tambahan;
    if (item.id === selectedId) {
      tambahan = (
        <View style={styles.tambahan}>
          <Text
            style={
              item.done
                ? styles.todoTextTambahanSelected
                : styles.todoTextTambahan
            }>
            {time} {'\n'}
            {'\n'}
            {desc}
          </Text>
        </View>
      );
    }

    let deleteIcon;
    if (item.id === selectedId) {
      deleteIcon = (
        <View style={styles.delete}>
          <DeleteModal index={index} done={item.done} />
        </View>
      );
    }

    return (
      <TouchableOpacity
        style={item.done ? styles.todoContainerSelected : styles.todoContainer}
        onPress={() => setSelectedId(item.id)}>
        <View style={styles.row}>
          {lewat}
          {category}
        </View>
        <Text style={item.done ? styles.todoTextSelected : styles.todoText}>
          {item.todo}
        </Text>
        <TouchableOpacity
          style={styles.edit}
          onPress={() =>
            navigation.navigate('editTodo', {
              index: index,
              todo: item.todo,
              desc: item.description,
              category: item.category,
              date: item.dueTime,
              status: item.done,
            })
          }>
          <FontAwesome5
            name={'edit'}
            size={RFPercentage(2.4)}
            color={item.done ? '#6D26FB' : '#fff'}
          />
        </TouchableOpacity>
        <View style={styles.check}>
          <CheckBox
            disabled={false}
            value={item.done}
            tintColors={{true: '#6D26FB', false: '#fff'}}
            onValueChange={() => handleCompleteStorage(index)}
          />
        </View>
        {tambahan}
        {deleteIcon}
      </TouchableOpacity>
    );
  };

  let status;
  if (data === null) {
    status = (
      <View style={styles.statusContainer}>
        <Text style={styles.status}>Your todos empty</Text>
      </View>
    );
  } else {
    status = (
      <FlatList
        contentContainerStyle={{marginBottom: hp(80)}}
        showsVerticalScrollIndicator={false}
        data={data.item}
        extraData={selectedId}
        renderItem={({item, index}) => {
          return <RenderTodoStorage item={item} index={index} />;
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos</Text>
      <ScrollView>{status}</ScrollView>
      <View style={styles.button}>
        <Buttons
          text={'New Todo'}
          press={() => navigation.navigate('AddTodo')}
        />
      </View>
    </View>
  );
}
