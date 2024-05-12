import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Button, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Header from './Header';
import Footer from './Footer';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export default function AvisScreen() {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
  });

  const [comment, setComment] = useState('');

  const updateAnswer = (question, answer) => {
    setAnswers(prevState => ({
      ...prevState,
      [question]: answer,
    }));
  };

  const addFeedbackToFirestore = async () => {
    try {
      const docRef = await addDoc(collection(db, 'feedback'), {
        ...answers,
        comment: comment,
      });
      console.log('Feedback added with ID: ', docRef.id);
      Alert.alert('Succès', 'Votre avis a été enregistré avec succès.');
    } catch (error) {
      console.error('Error adding feedback: ', error);
      Alert.alert('Erreur', 'Une erreur s\'est produite lors de l\'enregistrement de votre avis. Veuillez réessayer.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Donnez-nous votre avis :</Text>

        <View style={styles.card}>
          <Text style={styles.questionText}>Question 1: Aimez-vous notre application ?</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => updateAnswer('question1', 'Oui')}>
              <AntDesign name={answers.question1 === 'Oui' ? 'checkcircle' : 'checkcircleo'} size={24} color="green" />
              <Text>Oui</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => updateAnswer('question1', 'Non')}>
              <AntDesign name={answers.question1 === 'Non' ? 'checkcircle' : 'checkcircleo'} size={24} color="red" />
              <Text>Non</Text>
            </TouchableOpacity>
          </View>
        </View>
     
        <View style={styles.card}>
          <Text style={styles.questionText}>Question 2: Êtes-vous satisfait de la facilité d'utilisation ?</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => updateAnswer('question2', 'Oui')}>
              <AntDesign name={answers.question2 === 'Oui' ? 'checkcircle' : 'checkcircleo'} size={24} color="green" />
              <Text>Oui</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => updateAnswer('question2', 'Non')}>
              <AntDesign name={answers.question2 === 'Non' ? 'checkcircle' : 'checkcircleo'} size={24} color="red" />
              <Text>Non</Text>
            </TouchableOpacity>
          </View>
        </View>

  
        <View style={styles.card}>
          <Text style={styles.questionText}>Question 3: Avez-vous des suggestions d'amélioration ?</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => updateAnswer('question3', 'Oui')}>
              <AntDesign name={answers.question3 === 'Oui' ? 'checkcircle' : 'checkcircleo'} size={24} color="green" />
              <Text>Oui</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => updateAnswer('question3', 'Non')}>
              <AntDesign name={answers.question3 === 'Non' ? 'checkcircle' : 'checkcircleo'} size={24} color="red" />
              <Text>Non</Text>
            </TouchableOpacity>
          </View>
        </View>

   
        <View style={styles.card}>
          <Text style={styles.questionText}>Question 4: Avez-vous trouvé l'application utile ?</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => updateAnswer('question4', 'Oui')}>
              <AntDesign name={answers.question4 === 'Oui' ? 'checkcircle' : 'checkcircleo'} size={24} color="green" />
              <Text>Oui</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => updateAnswer('question4', 'Non')}>
              <AntDesign name={answers.question4 === 'Non' ? 'checkcircle' : 'checkcircleo'} size={24} color="red" />
              <Text>Non</Text>
            </TouchableOpacity>
          </View>
        </View>

     
        <Text style={styles.answersText}>Réponses sélectionnées :</Text>
        <View style={styles.answersContainer}>
          <Text>Question 1: {answers.question1}</Text>
          <Text>Question 2: {answers.question2}</Text>
          <Text>Question 3: {answers.question3}</Text>
          <Text>Question 4: {answers.question4}</Text>
        </View>

        <View style={styles.commentContainer}>
          <Text style={styles.commentTitle}>Ajouter un commentaire :</Text>
          <TextInput
            style={styles.commentInput}
            onChangeText={text => setComment(text)}
            value={comment}
            placeholder="Ajoutez un commentaire..."
            multiline
          />
        </View>

        {/* Add button */}
        <View style={styles.addButtonContainer}>
          <Button title="Ajouter" onPress={addFeedbackToFirestore} color="#FF1493" />
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  commentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  commentInput: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  addButtonContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
});