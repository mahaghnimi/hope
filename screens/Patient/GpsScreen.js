import React, { useEffect, useState } from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import { Ionicons } from '@expo/vector-icons'; // Importer les icônes Ionicons
import Header from './Header'; // Import the Header component
import Footer from './Footer'; 

export default function GpsScreen({ navigation }) {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let newLocation = await Location.getCurrentPositionAsync({});
        setLocation(newLocation);
    };

    const shareLocation = () => {
        if (location) {
            navigation.navigate('MessageScreen', { latitude: location.coords.latitude, longitude: location.coords.longitude });
        }
    };

    return (
        
        <View style={{ flex: 1 }}>
            <Header/>
            {location ? (
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title="You are here"
                    />
                </MapView>
            ) : (
                <Text>{errorMsg ? errorMsg : 'Waiting..'}</Text>
            )}
            <Button title="Obtenir l'emplacement" onPress={getLocation} color="#FF1493" />
            <TouchableOpacity style={styles.shareButton} onPress={shareLocation}>
                <Ionicons name="location-sharp" size={24} color="white" />
            </TouchableOpacity>
            <Footer/>
        </View>
    );
}

const styles = StyleSheet.create({
    shareButton: {
        position: 'absolute',
        bottom: 100,
        right: 20,
        backgroundColor: '#FF1493',
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
