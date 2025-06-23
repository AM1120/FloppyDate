import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator'; // Tu navegador
import { EventsProvider } from './src/context/EventsContext';
import { RewardsProvider } from './src/context/RewardsContext';
//import firebaseapp from './src/services/firebase';
import SplashScreen from './src/screens/SplashScreen'; 
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const Stack = createStackNavigator ();
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Splash" component={SplashScreen}/>
      </Stack.Navigator>
    
  );
 } 

  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )

}