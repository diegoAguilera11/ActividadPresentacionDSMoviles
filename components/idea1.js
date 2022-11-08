import React, { useState } from 'react';

import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
} from 'react-native';


const idea1 = () => {
    const [nombre, setNombre] = useState('');
    const [info, setInfo] = useState('');

    const arrayNombres = ["Diego", "Camila", "Victor", "Drago"];
    const arrayInformacion = ["tiene 24 años", "tiene 22 años", "tiene 20 años", "tiene 21 años"];

    const buscarNombre = () => {

        const position = arrayNombres.findIndex(nombreB => nombreB === nombre);

        console.log(position)
        if (position === -1) {
            setInfo('')
            return
        }

        setInfo(arrayInformacion[position])

    }


    return (
        <ScrollView style={styles.example}>

            <Text style={styles.titulo}>Actividad DSM</Text>
            {info.length === 0 ? <Text style={styles.resultado}>NO SE ENCONTRO EL NOMBRE</Text> : <Text style={styles.resultado}>{info}</Text>}
            <View style={styles.label}>
                <Text style={styles.labelTexto}>Ingresa el nombre a buscar</Text>
                <TextInput style={styles.input} value={nombre} onChangeText={setNombre}></TextInput>
            </View>
            <Pressable style={styles.botonBuscar} onPress={() => buscarNombre()}>
                <Text style={styles.botonBuscarTexto}>Buscar Persona</Text>
            </Pressable>

        </ScrollView>
    );
}


const styles = StyleSheet.create({

    contenedor: {
        flex: 1
    },
    titulo: {
        fontSize: 30,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: '700',
        color: '#000',
        marginVertical: 30
    },
    botonBuscar: {
        backgroundColor: '#FAFA32',
        padding: 20,
        marginHorizontal: 30,
        alignItems: 'center',
        borderRadius: 10
    },
    botonBuscarTexto: {
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#B5B2B2',
        marginHorizontal: 20,
        borderRadius: 10
    },
    label: {
        marginVertical: 20
    },
    labelTexto: {
        marginLeft: 20,
        marginTop: 10
    },
    resultado: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '800',
        fontSize: 30
    }

});

export default idea1;