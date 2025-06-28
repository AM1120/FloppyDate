import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa tus pantallas del Stack
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import AgendaScreen from '../screens/AgendaScreen';

const Stack = createNativeStackNavigator();

export default function MainContentStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} // Oculta el header en HomeScreen
      />
      <Stack.Screen 
        name="Calendar" 
        component={CalendarScreen} 
        options={{ title: 'Calendario'}
        } // Título personalizado
      />
      <Stack.Screen 
        name="Agenda" 
        component={AgendaScreen} 
        options={{ title: 'Agenda' }} // Título personalizado
      />
    </Stack.Navigator>
  );
}