import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Header from './Header';
import Footer from './Footer';

export default function GererCompteScreen() {
    const navigation = useNavigation(); 

    const handleFirstCardPress = () => {
        navigation.navigate('ProfilMedScreen'); // Naviguer vers la page "ProfilMedScreen" lors du clic sur "Gérer Médecin"
    };
    
    const handleSecondCardPress = () => {
        navigation.navigate('ProfilPatScreen'); // Ici, vous pouvez spécifier la navigation pour gérer les profils de patients
    };
    
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <View style={styles.cardsContainer}>
                    <TouchableOpacity style={styles.card} onPress={handleFirstCardPress}>
                        <Text style={styles.title}>Gérer Médecin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.card, { marginHorizontal: 20 }]} onPress={handleSecondCardPress}>
                        <Text style={styles.title}>Gérer Patient</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer style={styles.footer} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 192, 203, 0.5)',
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#e5e5e5',
        borderRadius: 10,
        width: 150,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF69B4',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
      },
});
