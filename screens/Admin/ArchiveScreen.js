import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default function ArchiveScreen({ navigation }) {

    return (
        <View style={styles.container}>
          <Header />
          
          {/* Espace vide */}
          <View style={styles.space}></View>
          
          {/* Footer avec width: 100% */}
          <View style={styles.footer}>
            <Footer />
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 192, 203, 0.5)',
      },
      space: {
        flex: 1,
        // Espace vide
      },
      footer: {
        width: '100%', // Pour occuper toute la largeur de l'écran
      },
    });
    