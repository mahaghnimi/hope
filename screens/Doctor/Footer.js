import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Footer({ navigation }) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('MedHomeScreen')}>
        <Ionicons name="home" size={24} color="#FF1493" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('MedchatScreen')}>
        <Ionicons name="chatbubble" size={24} color="#FF1493" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('AvisScreen')}>
        <Ionicons name="star" size={24} color="#FF1493" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('GpsScreen')}>
        <Ionicons name="navigate" size={24} color="#FF1493" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#FFC0CB',
  },
  footerIcon: {
    alignItems: 'center',
  },
});
