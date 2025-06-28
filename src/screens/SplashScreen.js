// src/screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Necesitas useNavigation para acceder al objeto de navegación

export default function SplashScreen() {
  return (
    <ImageBackground
      source={require('../../assets/fondo.png')}
      style={styles.fondo}
    >
      <View style={styles.contentContainer}>
        <Image
          source={require('../../assets/titlefloppy.png')}
          style={styles.titleImage}
          resizeMode="contain"
        />
        <View style={styles.spacer} />
        <Image
          source={require('../../assets/Logo-Circular.png')}
          style={styles.mainLogo}
          resizeMode="contain"
        />
      </View>
    </ImageBackground>
  );
}

// Tus estilos del splash (como los definimos anteriormente)
const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  titleImage: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  spacer: {
    height: 50,
  },
  mainLogo: {
    width: 200,
    height: 200,
  },
});