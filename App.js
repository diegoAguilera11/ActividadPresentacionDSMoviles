import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import ExampleScrollView from "./Views/ExampleScrollView";

const App = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  }

  const restar = () => {
    if (contador === 0) {
      return
    }
    setContador(contador - 1);
  }

  const resetear= () => {
    setContador(0);
  }


  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Actividad Dsm</Text>

      <Pressable style={styles.botonPress} onPress={() => sumar()}>
        <Text style={styles.botonPressTexto}>+</Text>
      </Pressable>

      <Pressable style={styles.botonPress} onPress={() => restar()}>
        <Text style={styles.botonPressTexto}>-</Text>
      </Pressable>

      <Pressable style={styles.botonPress} onPress={() => resetear()}>
        <Text style={styles.botonPressTexto}>Resetear</Text>
      </Pressable>

      <Text style={styles.resultado}>Contador: {contador}</Text>

      <Pressable style={styles.botonCerrar} onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.botonCerrarTexto}>Ir a ScrollView</Text>
      </Pressable>
      {modalVisible && (
        <ExampleScrollView
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </View>




  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex:1,
    backgroundColor: '#04F5BE'
  },
  titulo: {
    fontSize: 40,
    textTransform: 'uppercase',
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 30,
    color: '#000',
  },
  parrafo: {
    marginBottom: 20,
    fontSize: 20,
    paddingHorizontal: 15,
    textAlign: 'center'
  },
  botonCerrar: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 50,
    paddingVertical: 15
  },
  botonCerrarTexto: {
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  botonPress: {
    backgroundColor: '#F57904',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 80,
    paddingVertical: 15
  },
  botonPressTexto: {
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#FFF'
  },
  resultado: {
    fontSize: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#000'
  }
});

export default App;
