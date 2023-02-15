import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {RacesCard} from '../../components/RacesCard/Index';
import React from 'react';
import {styles} from './styles';

type ItemData = {
  id: string;
  title: string;
  date: string;
};

const DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    date: '22 10 2022',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    date: '22 10 2022',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    date: '22 10 2022',
  },
];

const loading = true;

export const RacesList = () => {
  return (
    <FlatList
      ListEmptyComponent={
        <View style={styles.emptyListContainer}>
          <Text>Empty</Text>
        </View>
      }
      ListFooterComponent={loading ? <ActivityIndicator /> : undefined}
      data={DATA}
      onEndReachedThreshold={0.5}
      renderItem={({item}) => <RacesCard name={item.title} date={item.date} />}
    />
  );
};
