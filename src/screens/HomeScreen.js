import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Datos de eventos
const events = [
  { id: '1', title: 'Sección1' },
  { id: '2', title: 'Sección2' },
  { id: '3', title: 'Sección3' },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Botones de navegación con títulos fuera */}
      <View style={styles.navBoton}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Calendar')}>
            <Image source={require('../../assets/calendar.png')} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.subtitle}>Calendario</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Agenda')}>
            <Image source={require('../../assets/book.png')} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.subtitle}>Agenda</Text>
        </View>
      </View>

      {/* Indicador de tiempo */}
      <View style={styles.time}>
        <Image source={require('../../assets/Icon_Time1.png')} style={styles.IconTime} />
      </View>

      {/* Sección de actividades */}
      <View style={styles.actividades}>
        <Text style={styles.Titulo}>Actividades</Text>
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.Evento}>
              <Image source={require('../../assets/diskete.png')} style={styles.discIcon} />
              <Text style={styles.eventText}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F0F4E3' },
  navBoton: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginTop: 50 },
  buttonContainer: { 
    alignItems: 'center', 
  },
  iconButton: { 
    alignItems: 'center', 
    backgroundColor: '#7278F2', 
    borderRadius: 80, 
    borderWidth: 6,
    width: 150, 
    height: 150,
    justifyContent: 'center', 
  },
  icon: { 
    width: 80, 
    height: 80, 
    resizeMode: 'contain',
  },
  subtitle: { 
    marginTop: 10, 
    fontSize: 16,
    textAlign: 'center',
  },
  time: { 
    alignItems: 'center', 
    marginTop: 50 },
  IconTime: { 
    width: 200, 
    height: 100, 
    resizeMode: 'contain' },
  actividades: { 
    backgroundColor: '#699EBF',
    padding: 20,
    borderTopLeftRadius: 45, 
    borderTopRightRadius: 45, 
    borderWidth: 5,
    marginTop: 'auto',
  },
  Titulo: { 
    fontSize: 40, 
    marginBottom: 20 },
  Evento: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10 },
  discIcon: { 
    width: 30, 
    height: 30, 
    marginRight: 15 },
  eventText: { 
    fontSize: 20 },
});