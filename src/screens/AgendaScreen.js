import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';

const initialEvents = [
  { id: '1', title: 'Reunión', date: '2025-06-28', time: '10:00' },
  { id: '2', title: 'Tarea', date: '2025-06-28', time: '14:00' },
];

export default function AgendaScreen() {
  const navigation = useNavigation();
  const [events, setEvents] = useState(initialEvents);

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.eventItem}>
              <Text>{item.date} - {item.time}</Text>
              <Text style={styles.eventTitle}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EFF2D8' },
  backButton: { padding: 10 },
  backText: { fontSize: 20, color: '#fff' },
  headerTitle: { color: '#fff', fontSize: 20, marginLeft: 10 },
  mainContent: { flex: 0.9, padding: 10 },
  eventItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  eventTitle: { fontSize: 16, fontWeight: 'bold' },
});