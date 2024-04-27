import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import Header from './Header'; 
import Footer from './Footer';

export default function SuiviMedScreen({ navigation }) {

  const [medicationName, setMedicationName] = useState('');
  const [totalPills, setTotalPills] = useState('');
  const [quantityPerDay, setQuantityPerDay] = useState('');

  const handleAddMedication = () => {
    // Envoyer les données de médicament à une API, une base de données, ou un autre service de sauvegarde
    console.log('Nom du médicament:', medicationName);
    console.log('Total de pilules:', totalPills);
    console.log('Quantité par jour:', quantityPerDay);

    // Réinitialiser les champs après l'ajout du médicament
    setMedicationName('');
    setTotalPills('');
    setQuantityPerDay('');
  };

  return (
    <ImageBackground source={require('../../assets/images/suivre.jpeg')} style={styles.background}>
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
