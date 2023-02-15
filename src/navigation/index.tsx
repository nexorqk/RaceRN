import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RacesList} from '../screens/RacesList';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RacesList" component={RacesList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
