import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import firebaseapp from './src/services/firebase';
import SplashScreen from './src/screens/SplashScreen'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AgendaScreen from './src/screens/AgendaScreen';
import CalendarScreen from './src/screens/CalendarScreen';


//el orden con el cual se estará haciendo el llamado a los diferentes screen
  //Splah (el inicio)
  //Home (Donde el usuario navegará)
  //

export default function App() {
  const Stack = createNativeStackNavigator ();
  function MyStack() {
    return (
      <Stack.Navigator> 
        <Stack.Screen name="Splash" component={SplashScreen}/> 
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Calendar" component={CalendarScreen}/>           
        <Stack.Screen name="Agenda" component={AgendaScreen}/>        
      </Stack.Navigator>
    
  );
 } 

  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )

}