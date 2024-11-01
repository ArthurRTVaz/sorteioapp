import { StyleSheet, Platform, Text, ImageBackground, Button, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
export default function Index() {
  return (
    <ImageBackground source={require('../src/background.png')} style={styles.background}>
      <Text style={styles.titulo}>App Sorteio</Text>
      <Text style={styles.texto}>Adicione itens para o sorteio ou use uma lista existente</Text>
      <TouchableOpacity style={styles.botaoListas}>
        <Text style={styles.botaoTexto1}>Listas</Text>
      </TouchableOpacity>
      <TextInput 
      style={styles.input} 
      placeholder="Digite aqui..." 
      placeholderTextColor="#999" 
      multiline={true}
      textAlignVertical='top'/>
      <View style={styles.icones}>
        <FontAwesome name='gear' size={36} color={'#007ACC'} /><Text>{'\n'}</Text>
        <FontAwesome name='save' size={36} color={'#007ACC'} />
      </View>
      <TouchableOpacity style={styles.botaoSortear}>
        <Text style={styles.botaoTexto2}>Sortear</Text>
      </TouchableOpacity>
      <Text style={styles.textoResultado}>Resultado</Text>
      <View style={styles.resultado}>
        <Text style={styles.textoresultado}>Item 3</Text>
      </View>
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
    texto: {
      color: '#007ACC',
      fontSize: 26,
      position: "absolute",
      top: 160,
      textAlign: "center",
    },
    botaoListas: {
      backgroundColor: "#74D4FD",
      padding: 30,
      borderRadius: 60,
      position: "absolute",
      top: 300,
      left: 240,
      elevation: 10,
      shadowColor: '#000',
    },
    botaoSortear: {
      backgroundColor: "#007ACC",
      padding: 15,
      borderRadius: 10,
      position: "absolute",
      top: 500,
    },
    botaoTexto1: {
      color: '#007ACC',
      fontSize: 30,
    },
    botaoTexto2: {
      color: '#fff',
      fontSize: 30,
    },
    textoResultado: {
      color: "#007ACC",
      fontSize: 40,
      position: "absolute",
      top: 600,
    },
    resultado: {
      backgroundColor: '#FF8C42',
      position: 'absolute',
      top: 680,
      borderRadius: 10,
      paddingHorizontal: 40,
      paddingVertical: 10,
    },
    textoresultado: {
      fontSize: 20,
      color: "#333333",
    },
    input: {
      width: '40%',
      height: 200,
      backgroundColor: '#F0F8FF',
      borderRadius: 10,
      paddingHorizontal: 10,
      marginVertical: 20,
      fontSize: 20,
      color: '#333',
      position: 'absolute',
      top: 230,
      left: 50,
      elevation: 10,
      shadowColor: '#000',
      
    },
    icones: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: "absolute",
      top: 330,
      left: 12,
    }
});