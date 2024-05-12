import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Alert } from 'react-native';
import Header from './Header'; 
import Footer from './Footer';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export default function SuiviMedScreen({ navigation }) {

  const [medicationName, setMedicationName] = useState('');
  const [totalPills, setTotalPills] = useState('');
  const [quantityPerDay, setQuantityPerDay] = useState('');

  const handleAddMedication = async () => {
    // Vérifier si l'un des champs est vide
    if (!medicationName || !totalPills || !quantityPerDay) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'medications'), {
        medicationName: medicationName,
        totalPills: parseInt(totalPills),
        quantityPerDay: parseInt(quantityPerDay)
      });

      console.log('Document written with ID: ', docRef.id);

      // Réinitialiser les champs après l'ajout du médicament
      setMedicationName('');
      setTotalPills('');
      setQuantityPerDay('');

      // Afficher un message de succès
      Alert.alert('Succès', 'Le médicament a été ajouté avec succès.');
    } catch (error) {
      console.error('Error adding document: ', error);

      // Afficher un message d'erreur
      Alert.alert('Erreur', 'Une erreur s\'est produite lors de l\'ajout du médicament. Veuillez réessayer.');
    }
  };

  return (
    <ImageBackground source={require('../../assets/images/suivree.png')} style={styles.background}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Suivi médicaments</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nom du médicament"
            value={medicationName}
            onChangeText={text => setMedicationName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Total de pilules"
            keyboardType="numeric"
            value={totalPills}
            onChangeText={text => setTotalPills(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Quantité par jour"
            keyboardType="numeric"
            value={quantityPerDay}
            onChangeText={text => setQuantityPerDay(text)}
          />
          <Button title="Ajouter médicament" onPress={handleAddMedication} color='#FF1493'  />
        </View>
      </View>
      <Footer />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize:25,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#FF1493',
  },
  form: {
    width: '70%',
  },
  input: {
    height: 40,
    borderColor: 'pink',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'pink',
    borderRadius: 20,
  },
});
