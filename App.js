import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button,TouchableOpacity } from 'react-native';

export default function App() {
  // Declaração dos estados usando o useState do React
  const [alcoholPrice, setAlcoholPrice] = useState('');
  const [gasolinePrice, setGasolinePrice] = useState('');
  const [result, setResult] = useState('');

  // Função para calcular qual combustível é mais vantajoso
  const calculateFuel = () => {
    if (alcoholPrice && gasolinePrice) {
      const alcohol = parseFloat(alcoholPrice);
      const gasoline = parseFloat(gasolinePrice);
      const ratio = alcohol / gasoline;
      
      // Verifica a proporção entre os preços
      if (ratio < 0.7) {
        setResult('Abasteça com Álcool');
      } else {
        setResult('Abasteça com Gasolina');
      }
    } else {
      setResult('Digite os valores de preço do Álcool e da Gasolina');
    }
  };

  // Renderização do componente
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Preço do Álcool:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={alcoholPrice}
        onChangeText={text => setAlcoholPrice(text)}
      />
      <Text style={styles.label}>Preço da Gasolina:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={gasolinePrice}
        onChangeText={text => setGasolinePrice(text)}
      />
	<view>
      <TouchableOpacity style={styles.button} onPress={calculateFuel}>
	 <Text style={styles.buttontext}>Calcular</Text></TouchableOpacity>
    </view>
		<Text style={styles.result}>{result}</Text>
    </View>
  );
}

// Estilos do componente usando StyleSheet do React Native
const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: '#37A879',
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
button:{
	marginBottom: 16,
	height: 40,
 	fontSize: 25,
	textAlign: 'center',
	backgroundColor:'#A82811',
  },
buttontext:{
    textAlign:"center",
    fontSize:25,
    fontWeight:'bold',
    color:"#EDB22D",
  },

  result: {
	marginTop: 16,
    fontSize: 40,
	textAlign: 'center',
    fontWeight: 'bold',
	color:"#EDB22D",
  },
});
