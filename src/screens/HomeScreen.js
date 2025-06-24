import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';


//visualización de la parte de los eventos (no es acumulativo todavía)
const events = [
  { id: '1', title: 'Sección1' },
  { id: '2', title: 'Sección2' },
  { id: '3', title: 'Sección3' },
];

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      
      {/* Cabeza donde se ubica el menú*/}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuBoton}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
      </View>

      {/*Sección deonde se encuentra los items principales*/}
      <View style={styles.navBoton}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../../assets/calendar.png')} style={styles.icon} />
          <Text style={styles.subtitle}>Calendario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../../assets/book.png')} style={styles.icon} />
          <Text style={styles.subtitle}>Agenda</Text>
        </TouchableOpacity>
      </View>

      {/* Indicador de racha */}
      <View style={styles.time}>
        <Image source={require('../../assets/Icon_Time1.png')} style={styles.IconTime} />
      </View>

      {/* Actividades */}
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
   


//Los estilos que se tienen para esta parte del Home y que se van a llamar y reciclar
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F4E3' },
  header: { padding: 10, backgroundColor: '#699EBF' },
  menuBoton: { alignSelf: 'flex-start', padding: 8 },
  menuText: { fontSize: 30, backgroundColor:'#F2766B', borderRadius:8, padding: 10 },
  navBoton: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 50 },
  iconButton: { alignItems: 'center', backgroundColor:'#7278F2', borderRadius:80, borderStartWidth:6, width:110, height:110 },
  icon: { width: 100, height: 100, resizeMode: 'contain', marginTop: 5 },
  subtitle: { marginTop: 15},
  time: { alignItems: 'center', marginTop: 20 },
  IconTime: { width: 500, height: 100, resizeMode: 'contain' },
  actividades: { backgroundColor: '#699EBF', marginTop: 20, padding: 80, borderTopLeftRadius: 45, borderTopRightRadius: 45, borderWidth:5 },
  Titulo: {fontSize: 20, marginBottom: 20 },
  Evento: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  discIcon: { width: 30, height: 30, marginRight: 15 },
  eventText: {fontSize: 20 },
});
