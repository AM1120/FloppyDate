import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import AppDrawerNavigator from './src/navigation/DrawerNavigator'; 
import CalendarScreen from './src/screens/CalendarScreen';

const RootStack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isLoading ? (
          <RootStack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <RootStack.Screen name="MainApp" component={AppDrawerNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}