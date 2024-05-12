import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const SelectedTimeSlots = ({ selectedSlots }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Selected Time Slots</Text>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.columnHeader}>Date</Text>
          <Text style={styles.columnHeader}>Time</Text>
        </View>
        {selectedSlots.map((slot, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.cell}>{slot.date}</Text>
            <Text style={styles.cell}>{slot.time}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#000',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 10,
  },
  columnHeader: {
    flex: 1,
    fontWeight: 'bold',
  },
  cell: {
    flex: 1,
  },
});

export default SelectedTimeSlots;
