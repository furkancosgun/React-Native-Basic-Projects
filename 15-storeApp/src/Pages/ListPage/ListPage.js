import {View, FlatList, Text, ActivityIndicator} from 'react-native';
import ListItem from '../../Components/ListItem';
import useFetch from '../../Hooks/useFetch';

const ListPage = ({navigation}) => {
  const {data, loading, error} = useFetch('https://fakestoreapi.com/products');

  const renderItem = ({item}) => (
    <ListItem item={item} navigation={navigation} />
  );

  const RenderList = () => {
    return (
      <View>
        {loading ? (
          <ActivityIndicator size={'large'} color={'black'} />
        ) : (
          <FlatList data={data} renderItem={renderItem} />
        )}
      </View>
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {error != null ? <Text>{error}</Text> : <RenderList />}
    </View>
  );
};

export default ListPage;
