import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import InsightsScreen from '../views/InsightsScreen';
import ProfileScreen from '../views/ProfileScreen';
import SignupScreen from '../views/SignupScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Signup">
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Insights" component={InsightsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
