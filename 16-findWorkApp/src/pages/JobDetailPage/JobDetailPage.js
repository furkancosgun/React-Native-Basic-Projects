import {
  ActivityIndicator,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import useFetch from '../../Hooks/UseFetch';
import React from 'react';

const JobDetailPage = ({route}) => {
  const {id} = route.params;
  const {data, loading} = useFetch(
    `https://www.themuse.com/api/public/jobs/${id}`,
  );
  const {width} = useWindowDimensions();

  let htmlSoucre = null;
  if (!loading) {
    htmlSoucre = {
      html: data.contents,
    };
  }

  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView style={{padding: 10}}>
          <RenderHtml contentWidth={width} source={htmlSoucre} />
        </ScrollView>
      )}
    </View>
  );
};

export default JobDetailPage;
