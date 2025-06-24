import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); 
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/fondo.png')}
      style={styles.fondo}
    >

    <View style={styles.container}>
      <Text style={styles.title}>FLOPPY DATE</Text>
      <Image source={require('../../assets/Logo-Circular.png')} style={styles.image} />
    </View>
    </ImageBackground>
  );
}



//Tipos de styles dentro de esta página
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A4CA4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color: '#EFF2D8',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  fondo:{
    flex: 1,
    width:'100%',
    height: '100%',

  },
});
