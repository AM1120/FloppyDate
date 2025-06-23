// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// 1. Importa todas las pantallas que usarás en este navegador
import SplashScreen from '../screens/SplashScreen'; // Asegúrate de que esta ruta es correcta
import HomeScreen from '../screens/HomeScreen';   // Asegúrate de que esta ruta es correcta
// import LoginScreen from '../screens/LoginScreen'; // Si tienes una pantalla de login

const Stack = createStackNavigator(); // 2. Crea una instancia de tu navegador de pila

const AppNavigator = () => {
  return (
    <Stack.Navigator
      // 3. ¡Aquí es donde defines la ruta inicial!
      // El valor de 'initialRouteName' debe coincidir EXACTAMENTE con el 'name' de una de tus <Stack.Screen>
      initialRouteName="Splash" // <-- Esto hará que 'SplashScreen' sea la primera pantalla
      
      // Opcional: Oculta la cabecera de navegación por defecto para todas las pantallas
      screenOptions={{ headerShown: false }} 
    >
      {/* 4. Define tus pantallas. El 'name' aquí es el que usarás para navegar y en 'initialRouteName' */}
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      {/* Agrega aquí cualquier otra pantalla que forme parte de esta pila */}
    </Stack.Navigator>
  );
};

// 5. ¡No olvides exportar tu navegador para poder usarlo en App.js!
export default AppNavigator;