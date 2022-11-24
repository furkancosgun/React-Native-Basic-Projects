import * as React from 'react';
import {Button, View, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen
          options={{
            drawerLabel: 'Label',
          }}
          name="Home"
          component={HomeScreen}
        />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// Eğer bu gizli menüyü kod ile açmak veya kapamak isteseniz aşağıdaki kodları kullanabilirsiniz.

// JavaScript
// this.props.navigation.openDrawer();
// this.props.navigation.closeDrawer();
// 1
// 2
// this.props.navigation.openDrawer();
// this.props.navigation.closeDrawer();
// // Toogle özelliği ile açığı kapalı, kapalıyı açık yapabilirsiniz.

// JavaScript
// this.props.navigation.toggleDrawer();
// 1
// this.props.navigation.toggleDrawer();
// // Drawer’ın açık mı kapalı mı olduğunu öğrenmek için:

// JavaScript
// const parent = this.props.navigation.dangerouslyGetParent();
// const isDrawerOpen = parent && parent.state && parent.state.isDrawerOpen;
// 1
// 2
// const parent = this.props.navigation.dangerouslyGetParent();
// const isDrawerOpen = parent && parent.state && parent.state.isDrawerOpen;
// // Çok basit örneklerle navigation konusu işledik. Daha fazla bilgi için React Navigation sitesini ziyaret edebilirsiniz.
