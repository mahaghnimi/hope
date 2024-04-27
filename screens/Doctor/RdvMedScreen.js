import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, TextInput, Button } from 'react-native';
import Header from './Header';
import Footer from './Footer'; 

export default function RdvMedScreen({ navigation }) {

  const [dates, setDates] = useState([]);
  const [dateInput, setDateInput] = useState('');
  const [slots, setSlots] = useState({});
  const [slotInput, setSlotInput] = useState('');

  const addDate = () => {
    if (dateInput.trim() !== '') {
      setDates([...dates, dateInput]);
      setSlots({ ...slots, [dateInput]: [] });
      setDateInput('');
    }
  };

  const addSlot = (date) => {
    if (slotInput.trim() !== '') {
      if (slots[date].length < 3) { 
        const updatedSlots = { ...slots, [date]: [...slots[date], slotInput] };
        setSlots(updatedSlots);
      } else {
        alert("The maximum number of time slots for this date has already been reached.");
      }
      setSlotInput('');
    }
  };

  const removeSlot = (date, slot) => {
    const updatedSlots = { ...slots, [date]: slots[date].filter((s) => s !== slot) };
    setSlots(updatedSlots);
  };

  const removeDate = (date) => {
    const { [date]: _, ...updatedSlots } = slots;
    setSlots(updatedSlots);
    setDates(dates.filter((d) => d !== date));
  };

  const handleConfirm = () => {
    // Perform confirmation actions here
  };

  return (
    <View style={styles.container}>
      <Header style={styles.header} />
      <Text style={styles.title}>Gérer les rendez-vous</Text>
      <Text style={styles.addDateText}>Ajouter une date :</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={dateInput}
          onChangeText={setDateInput}
          placeholder="YYYY-MM-DD"
        />
        <Button title="Ajouter" onPress={addDate} color="#FF1493" />
      </View>
      <FlatList
        data={dates}
        renderItem={({ item }) => (
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{item}</Text>
            <TouchableOpacity style={styles.removeButton} onPress={() => removeDate(item)}>
              <Text style={styles.removeButtonText} >Supprimer</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.slotInput}
              value={slotInput}
              onChangeText={setSlotInput}
              placeholder="HH:MM AM/PM"
            />
            <Button title="Ajouter créneau" onPress={() => addSlot(item)} color="#FF1493"/>
            <FlatList
              data={slots[item]}
              renderItem={({ item: slot, index }) => (
                <View style={styles.slotContainer}>
                  <Text style={styles.slotText}>Le {index + 1}{index === 0 ? 'er' : 'ème'} temps: {slot}</Text>
                  <TouchableOpacity style={styles.removeButton} onPress={() => removeSlot(item, slot)}>
                    <Text style={styles.removeButtonText}>Supprimer</Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(slot) => slot}
            />
          </View>
        )}
        keyExtractor={(item) => item}
      />
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirmer</Text>
      </TouchableOpacity>
      <Footer style={styles.footer} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
    padding: 20,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
    color: '#880088',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  addDateText: {
    color: '#FF1493', // Rose color
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#FF1493', // Pink border
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#000', // Black text
  },
  dateContainer: {
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', // White text
  },
  slotInput: {
    borderWidth: 1,
    borderColor: '#FF1493', // Pink border
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#000', // Black text
  },
  slotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  slotText: {
    color: '#880088', // Violet color
    marginRight: 10,
  },
  removeButton: {
    marginLeft: 'auto',
    backgroundColor: 'pink',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#FFFFFF', // White text
  },
  confirmButton: {
    backgroundColor: '#FF1493', // Pink color
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFFFFF', // White text
    fontWeight: 'bold',
  },
  // Separate styles for header and footer
  header: {
    width: '100%',
  },
  footer: {
    width: '100%',
  },
});
