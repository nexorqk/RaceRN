import React from 'react';
import {View, Text, Button, Linking} from 'react-native';

import {styles} from './styles';

const url = 'https://google.com';

const DriverDetails = () => {
  const pressHandler = () => {
    Linking.openURL(url);
  };

  const name = 'name';

  return (
    <View>
      <Text children={`name: ${name}`} style={styles.text} />
      <Text children={`name: ${name}`} style={styles.text} />
      <Text children={`name: ${name}`} style={styles.text} />
      <Text children={`name: ${name}`} style={styles.text} />
      <Text children={`name: ${name}`} style={styles.text} />
      <Text children={`name: ${name}`} style={styles.text} />
      <Button title="Open" onPress={pressHandler} />
    </View>
  );
};

export default DriverDetails;
