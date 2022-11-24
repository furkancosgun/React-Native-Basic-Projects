import {View, Button} from 'react-native';
import React from 'react';

const Profile = ({navigation}) => {
  return (
    <View>
      <Button
        title="Go Edit Profile"
        onPress={() => navigation.navigate('editProfile')}
      />
    </View>
  );
};

export default Profile;
