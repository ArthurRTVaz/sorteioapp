import { StyleSheet, Platform, Text, ImageBackground, Button, TouchableOpacity, View, TextInput, Image } from 'react-native';

export default function Historico() {
  return (
    <ImageBackground source={require('../src/background.png')} style={styles.background}>
      <Text style={styles.titulo}>Histórico</Text>
      <View style={styles.container}>
        <Text style={styles.texto}>Item 1</Text>
        <Text style={styles.texto}>Item 2</Text>
        <Text style={styles.texto}>Item 3</Text>
        <Text style={styles.texto}>Item 1</Text>
        <Text style={styles.texto}>Item 2</Text>
        <Text style={styles.texto}>Item 3</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.texto}>Item 1</Text>
        <Text style={styles.texto}>Item 2</Text>
        <Text style={styles.texto}>Item 3</Text>
        <Text style={styles.texto}>Item 1</Text>
        <Text style={styles.texto}>Item 2</Text>
        <Text style={styles.texto}>Item 3</Text>
      </View>
      <TouchableOpacity style={styles.botaoExcluir}>
        <Text style={styles.botaoTexto2}>Excluir Histórico</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        flexDirection: 'row',
      },
      titulo: {
        color: '#007ACC',
        fontSize: 50,
        position: "absolute",
        top: 25,
        left: 100,
      },
      container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      texto: {
        color: '#333',
        fontSize: 26,
      },
      botaoExcluir: {
        backgroundColor: "#007ACC",
        padding: 15,
        borderRadius: 10,
        position: "absolute",
        top: 650,
      },
      botaoTexto2: {
        color: '#fff',
        fontSize: 26,
      },
});