import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator'; 
//import firebaseapp from './src/services/firebase';
import SplashScreen from './src/screens/SplashScreen'; 
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import { StatsScreen } from './src/screens/StatsScreen';

export default function App() {
  const Stack = createStackNavigator ();
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="Stats" component={StatsScreen}/>        
      </Stack.Navigator>
    
  );
 } 

  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )

}