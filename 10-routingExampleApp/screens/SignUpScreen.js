import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const SignUpScreen = ({navigation}) => {
  const [user, setUser] = useState({
    name: '',
    surname: '',
    age: '',
  });
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <Text style={styles.textTitle}>Name</Text>
      <TextInput
        placeholder="Name"
        value={user.name}
        onChangeText={text => setUser({...user, name: text})}
        style={styles.input}
      />
      <Text style={styles.textTitle}>Surname</Text>
      <TextInput
        placeholder="Surname"
        value={user.surname}
        onChangeText={text => setUser({...user, surname: text})}
        style={styles.input}
      />
      <Text style={styles.textTitle}>Age</Text>
      <TextInput
        placeholder="Age"
        value={user.age}
        onChangeText={text => setUser({...user, age: text})}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => {
          if (user.name == '' && user.surname == '' && user.age == '') {
            alert('Inputs is empty');
            return;
          }
          navigation.navigate('finish', {user: user});
        }}>
        <Text style={styles.buttonText}>Save Me</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textTitle: {
    marginTop: 20,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 1,
    margin: 5,
  },
  buttonText: {
    marginTop: 30,
    backgroundColor: 'lightblue',
    margin: 5,
    padding: 5,
    fontSize: 30,
    fontWeight: 'bold',
    borderWidth: 1,
    textAlign: 'center',
  },
});

export default SignUpScreen;
