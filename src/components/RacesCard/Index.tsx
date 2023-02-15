import React, {FC} from 'react';
import {Button, View} from 'react-native';
import {styles} from './styles';

interface IRacesCardProps {
  name: string;
  date: string;
}

export const RacesCard: FC<IRacesCardProps> = ({name, date}) => {
  return (
    <View style={styles.container}>
      <View>
        <View children={name} style={styles.title} />
        <View children={date} style={styles.subtitle} />
      </View>
      <Button title="Wiki" />
    </View>
  );
};
