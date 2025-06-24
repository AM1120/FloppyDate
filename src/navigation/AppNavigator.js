import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen'; 
import HomeScreen from '../screens/HomeScreen';  
import Agenda from '../screens/AgendaScreen';
import CalendarScreen from '../screens/CalendarScreen';
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
      <Stack.Screen name="Agenda" component={Agenda}/>
      <Stack.Screen name="Calendar" component={Calendar}/>      

    </Stack.Navigator>
  );
};


export default AppNavigator;