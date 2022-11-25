import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListPage from './src/Pages/ListPage';
import DetailPage from './src/Pages/DetailPage';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="list"
          options={{title: 'List Page'}}
          component={ListPage}
        />
        <Stack.Screen
          name="detail"
          options={{title: 'Detail Page'}}
          component={DetailPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
