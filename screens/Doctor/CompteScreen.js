import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function CompteScreen({ navigation }) {
  const handleDoctorLogin = () => {
    // Logique de connexion pour le médecin
  };

  const handlePatientLogin = () => {
    // Logique de connexion pour le patient
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/lang.png')} style={styles.logo} />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('AthentifScreen')}>
          <Image source={require('../../assets/images/med.png')} style={styles.image} />
          <Text style={styles.title}>Connecter en tant que : </Text>
          <Text style={styles.title}>Médecin</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('AthentifScreen')}>
          <Image source={require('../../assets/images/pat.png')} style={styles.image} />
          <Text style={styles.title}>Connecter en tant que : </Text>
          <Text style={styles.title}>Patient</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.button, styles.adminButton]} onPress={()=>navigation.navigate('AthentifScreen')}>
        <View style={styles.adminContent}>
          <Image source={require('../../assets/images/admin.png')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Connecter en tant que : </Text>
            <Text style={styles.title}>Admin</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFC0CB',
  },
  logo: {
    width: 290,
    height: 200,
    marginBottom: 80,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 30, // Ajout d'une marge en bas pour espacer la dernière carte
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    width: 147,
    height: 240, // Ajustez la hauteur pour que la carte soit carrée
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  adminButton: {
    height: 90, 
    width: 300, // Ajustez la hauteur pour la carte d'admin
  },
  adminContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100, // Ajustez la hauteur pour que l'image soit carrée
    marginBottom: 10,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FF69B4',
  },
});
