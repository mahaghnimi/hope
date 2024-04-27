import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { FIREBASE_AUTH, db} from '../../firebaseConfig';
import Checkbox from 'expo-checkbox'
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function CreatecompteScreen({ navigation }) {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isDoctor, setIsDoctor] = useState(false);
  const [isPatient, setIsPatient]= useState(false);
  const [role, setRole] = useState('')
  const auth = FIREBASE_AUTH

const signUp = async ()=>{
  if(isDoctor){
    setRole('Doctor')
  }else setRole('Patient')
  try{
    const res = await createUserWithEmailAndPassword(auth,email,password)
    .then(()=>{
      db().collection('useres').doc(auth().currentUser.uid).set({
        uid:auth().currentUser.uid,
        role,
        email
      })
    })
    console.log(res)
  }
  catch(e){
    console.log(e)
  }
}

  const handleConfirmation = () => {
    if (!isValidName(Name)) {
      Alert.alert('Erreur', 'Le nom et prénom doivent commencer par une majuscule');
      return;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      Alert.alert('Erreur', 'Le numéro de téléphone doit être numérique et contenir au moins 8 chiffres');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Erreur', 'L\'adresse e-mail est invalide');
      return;
    }

    if (!isValidPassword(password)) {
      Alert.alert('Erreur', 'Le mot de passe doit contenir au moins 8 caractères avec des lettres et des chiffres');
      return;
    }

    navigation.navigate('ConfirmationScreen');
  };

  const isValidName = (name) => {
    return /^[A-Z][a-z]* [A-Z][a-z]*$/.test(name);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    return /^\d{8,}$/.test(phoneNumber);
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isValidPassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -100}
    >
      <ImageBackground source={require('../../assets/images/confirm.png')} style={styles.background}>
        <View style={styles.container}>
          <View style={styles.card}>
            {/* <TextInput
              style={styles.input}
              placeholder="Saisir votre nom et prénom"
              onChangeText={text => setName(text)}
              value={Name}
            />
            <TextInput
              style={styles.input}
              placeholder="Saisir votre Télephone"
              onChangeText={text => setPhoneNumber(text)}
              value={phoneNumber}
              keyboardType="phone-pad"
            /> */}
            <TextInput
              style={styles.input}
              placeholder="Saisir votre adresse email"
              onChangeText={text => setEmail(text)}
              value={email}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Saisir votre mot de passe"
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry
            />
            <View style={styles.Checkbox}>
            <Checkbox
            value={isDoctor}
            onValueChange={setIsDoctor}
            />
            <Text>En tant que docteur?</Text>
            </View>
            <View style={styles.Checkbox}>
            <Checkbox
            value={isPatient}
            onValueChange={setIsPatient}
            />
            <Text>En tant que 5?</Text>
            </View>
            

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.signupButton} onPress={signUp}>
                <Text style={styles.signupButtonText}>Confirmer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Texte en bas de la page */}
        <TouchableOpacity style={styles.bottomText} onPress={goBack}>
          <Text style={styles.bottomText}>Vous avez un compte ?</Text>
        </TouchableOpacity>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 170 // Ajouter marginTop ici pour l'espace entre l'image de fond et les champs de saisie
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    height:'70%'
  },
  input: {
    width: 280,
    height: 60,
    backgroundColor: 'pink',
    borderRadius: 30,
    marginBottom: 20, // Espacement entre les champs de saisie
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  signupButton: {
    backgroundColor: '#FF1493',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 100, // Largeur du bouton
    height: 40, // Hauteur du bouton
    marginRight: 10, // Espacement entre les boutons
  },
  signupButtonText: {
    color: 'white',
    fontSize: 15,
  },
  textButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 140, // Largeur du bouton
    height: 40, // Hauteur du bouton
    borderColor: '#FF1493',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    color: '#FF1493',
    fontSize: 16,
    paddingVertical: 35,
    textAlign: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  Checkbox:{
    flex:1,
    flexDirection:'row',
    gap:10,
  }
});
