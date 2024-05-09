import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("CrearAlumnos")}>
                <Text style={styles.text}>Crear Alumno(s)</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("ListaAlumnos")}>
                <Text style={styles.text}>Lista de Alumnos</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "start",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#059669",
        marginTop: 15,
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 25,
        borderColor: "#ffff",
        borderWidth: 1,
        padding: 25,
        width: "80%",
    },
    text: {
        fontSize: 20,
        textAlign: "center",
    }
})

export default Home;