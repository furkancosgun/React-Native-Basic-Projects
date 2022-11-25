import {View, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import useFetch from '../../Hooks/UseFetch';
import ListItemCard from '../../Compoents/ListItemCard';

const JobListPage = ({navigation, route}) => {
  const {data, loading} = useFetch(
    'https://www.themuse.com/api/public/jobs?page=1',
  );
  const renderItem = ({item}) => (
    <ListItemCard navigation={navigation} item={item} route={route} />
  );

  return (
    <View style={{flex: 1}}>
      {loading ? (
        <ActivityIndicator color={'red'} size={'large'} />
      ) : (
        <FlatList
          data={data.results}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default JobListPage;
