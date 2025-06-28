import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars'; // Importación estándar
import { useNavigation } from '@react-navigation/native';

export default function CalendarScreen() {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState('');

  const markedDates = {
    '2025-06-28': { marked: true, dotColor: '#F2766B' }, // Ejemplo de evento
    '2025-06-30': { marked: true, dotColor: '#EFF2D8' },
  };

  return (
    <View style={styles.container}>
    <View style={{ height: 40 }} /> 
      <View style={styles.mainContent}>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{ ...markedDates, [selectedDate]: { selected: true, selectedColor: '#699EBF' } }}
          theme={{
            selectedDayBackgroundColor: '#699EBF',
            todayTextColor: '#7278F2',
            arrowColor: '#7278F2',
          }}
        />
        <Text style={styles.dateText}>Fecha seleccionada: {selectedDate}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>+ Agregar Evento</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#EFF2D8' },
  mainContent: { 
    flex: 0.8, 
    padding: 20 },
  dateText: { 
    textAlign: 'center', 
    marginTop: 10, 
    marginBottom:10,
    fontSize: 16 },
  footer: { 
    height: '10%', 
    backgroundColor: '#699EBF', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderTopLeftRadius: 45, 
    borderTopRightRadius: 45, 
    marginTop:'auto' },
  addButton: { padding: 10 },
  addText: { color: '#fff', fontSize: 16,},
});