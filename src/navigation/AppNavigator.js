import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen'; 
import HomeScreen from '../screens/HomeScreen';  
import StatsScreen from '../screens/StatsScreen';
// import LoginScreen from '../screens/LoginScreen'; // Todavia no se activa

const Stack = createStackNavigator(); 

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash" // Primera Pantalla a Presentar en la App
      screenOptions={{ headerShown: false }} 
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Stats" component={StatsScreen}/>

    </Stack.Navigator>
  );
};


export default AppNavigator;