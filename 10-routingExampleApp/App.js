import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import CongratulationsScreen from './screens/CongratulationsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="finish" component={CongratulationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
