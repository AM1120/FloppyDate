import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity, Text } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import MainContentStackNavigator from './StackNavigator';
import AjustesScreen from '../screens/Menu/AjustesScreen';
import EstadisticasScreen from '../screens/Menu/EstadisticasScreen';
import MisDatosScreen from '../screens/Menu/MisDatosScreen';
import RecompensasScreen from '../screens/Menu/RecompensasScreen';

const Drawer = createDrawerNavigator();

export default function AppDrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="MainContent" screenOptions={({ navigation }) => ({
      headerShown: true,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          style={{ marginLeft: 15 }}
        >
          <Text style={{ fontSize: 24 }}>☰</Text>
        </TouchableOpacity>
      ),
    })}>
      <Drawer.Screen
        name="MainContent"
        component={MainContentStackNavigator}
        options={{ title: 'Inicio' }}
      />
      <Drawer.Screen name="Mis Datos" component={MisDatosScreen} />
      <Drawer.Screen name="Estadistica" component={EstadisticasScreen} />
      <Drawer.Screen name="Recompensa" component={RecompensasScreen} />
      <Drawer.Screen name="Ajustes" component={AjustesScreen} />
    </Drawer.Navigator>
  );
}