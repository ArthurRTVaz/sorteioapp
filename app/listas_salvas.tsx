import { StyleSheet, Platform, Text, ImageBackground, Button, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CustomDropdown from '../components/CustomDropdown';

export default function ListasSalvas() {
  return (
    <ImageBackground source={require('../src/background.png')} style={styles.background}>
      <Text style={styles.titulo}>Listas Salvas</Text>
      <CustomDropdown />
      <CustomDropdown />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
      },
      titulo: {
        color: '#007ACC',
        fontSize: 50,
        position: "absolute",
        top: 25,
      },
      lista: {
        color: '#333',
        fontSize: 26,
        flexDirection: 'row',
        alignItems: 'center',
      },
      texto: {
        color: '#007ACC',
        fontSize: 26,
      },
});