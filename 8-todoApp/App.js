import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([
    {id: 0, todo: 'hacking', date: '22.11.22'},
  ]);

  const deleteTodo = id => {
    setTodos(todos.filter(td => td.id != id));
  };

  const addTodo = () => {
    const today = new Date();
    const year = today.getFullYear();
    const mes = today.getMonth() + 1;
    const dia = today.getDate();
    const fecha = dia + '.' + mes + '.' + year;
    newTodo = {
      id: todos.length + 1,
      todo: text,
      date: fecha,
    };
    if (text != '') setTodos([newTodo, ...todos]);
    else alert('Todo Alanı Boş olamaz');
    setText('');
  };

  const renderTodos = ({item}) => {
    return <Todo deleteTodo={deleteTodo} item={item} />;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={style.headerContainer}>
        <Text style={style.headerText}>TODOS</Text>
        <Text style={style.headerText}>{todos.length}</Text>
      </View>
      <View style={{flex: 0.8}}>
        <FlatList key={item => item.id} data={todos} renderItem={renderTodos} />
      </View>
      <View style={{flex: 0.1, borderRadius: 10, borderWidth: 1, margin: 5}}>
        <TextInput
          onChangeText={setText}
          value={text}
          placeholder="TODO.."
          style={{borderBottomWidth: 1, padding: 10}}
        />
        <TouchableOpacity onPress={addTodo}>
          <Text
            style={{
              marginTop: 5,
              fontSize: 20,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            SAVE
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const Todo = ({item, deleteTodo}) => {
  return (
    <TouchableOpacity onLongPress={() => deleteTodo(item.id)}>
      {item && (
        <View style={{margin: 10}}>
          <Text style={style.todoActiveText}>{item.todo}</Text>
          <Text style={{fontWeight: 'bold', textAlign: 'right'}}>
            {item.date} {item.active}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  headerContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    padding: 10,
    fontSize: 30,
  },
  todoActiveText: {fontSize: 20, fontWeight: 'bold'},
});

export default App;
