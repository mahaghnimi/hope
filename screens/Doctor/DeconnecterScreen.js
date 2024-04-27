import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../firebaseConfig';

export default function DeconnecterScreen() {
  const navigation = useNavigation();
  const auth = FIREBASE_AUTH;

  const handleConfirmLogout =async () => {
    try{
      await signOut(auth);
      navigation.navigate('AuthentifScreen');
    } catch (error) {
      console.log('errorCode', errorCode);
      console.log('errorMessage', errorMessage);
    }
  };

  const handleCancel = () => {
    // Si l'utilisateur annule la déconnexion, il est ramené à l'écran précédent (dans ce cas, l'écran d'accueil)
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Are you sure you want to logout?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleConfirmLogout}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
