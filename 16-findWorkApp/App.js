import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JobListPage from './src/pages/JobListPage/JobListPage';
import JobDetailPage from './src/pages/JobDetailPage/JobDetailPage';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="list"
          options={{title: 'Jobs', headerTintColor: 'red'}}
          component={JobListPage}
        />
        <Stack.Screen
          name="detail"
          options={{title: 'Details', headerTintColor: 'red'}}
          component={JobDetailPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
