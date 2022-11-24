import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Pages/profile/Profile';
import EditProfile from './Pages/profile/EditProfile';
import Member from './Pages/member/Member';
import SearchMember from './Pages/member/SearchMember';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Uygulamada 3 ekran oldugunu varsayalım
//ilk ekranada bir bottom Navbar olcak profile ve member ekranları için
//ve membe ekranının dışında birde member arama ekranı olcak
//profile ekranında da profile edit ekranı olcak
//bizim bunları tek bir router uzerinde yonetmemiz lazım
const Stack = createNativeStackNavigator();

//Artık ben butun sayfalr arasıdna kolcayca geçiş saglayabilirim bu şekilde
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}} //Header alanını bu şekilde kaldırabilriiz
        name="profileScreen"
        component={Profile}></Stack.Screen>
      <Stack.Screen name="editProfile" component={EditProfile}></Stack.Screen>
    </Stack.Navigator>
  );
};

const MemberStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="memberScreen" component={Member}></Stack.Screen>
      <Stack.Screen name="searchMember" component={SearchMember}></Stack.Screen>
    </Stack.Navigator>
  );
};

const Nav = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Nav.Navigator>
        <Nav.Screen name="profile" component={ProfileStack} />
        <Nav.Screen name="member" component={MemberStack} />
      </Nav.Navigator>
    </NavigationContainer>
  );
};

export default App;
