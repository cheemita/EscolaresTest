import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Platform } from "react-native";

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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F3F4F6",
        marginBottom: 300,
    },
    button: {
        backgroundColor: "#059669",
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 40,
        width: "80%",
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
            },
            android: {
                elevation: 6,
            },
        }),
    },
    text: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    }
})

export default Home;
