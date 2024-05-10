import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";

import Home from "./screens/Home";
import CrearAlumnos from "./screens/CrearAlumnos";
import ListaAlumnos from "./screens/ListaAlumnos";
import EditarAlumno from "./screens/EditarAlumno";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => (
              <React.Fragment>
                <Text style={{
                  fontSize: 30, color: 'white',
                  textShadowColor: "#000",
                  textShadowRadius: 10,
                  textShadowOffset: {
                    width: 0,
                    height: 3,
                  },
                }}>ESCOLARES-MX TEST</Text>
                <Text style={{
                  fontSize: 16, color: 'white', textAlign: "center", textShadowColor: "#000",
                  textShadowRadius: 10, textShadowOffset: {
                    width: 0,
                    height: 3,
                  }
                }}>powered by José Manuel González</Text>
              </React.Fragment>
            ),
            headerTitleStyle: {
              fontSize: 30,
              color: "white",
              textShadowColor: "#000",
              textShadowRadius: 10,
              textShadowOffset: {
                width: 0,
                height: 3,
              },
            },
            headerStyle: {
              backgroundColor: "#065F46",
              height: 150,
            },
            headerTitleAlign: "center"
          }}
        />
        <Stack.Screen
          name="CrearAlumnos"
          component={CrearAlumnos}
          options={{
            title: 'Insertar Nuevo Alumno',
            headerTitleStyle: {
              fontSize: 18, color: 'white',
                  textShadowColor: "#000",
                  textShadowRadius: 10,
                  textShadowOffset: {
                    width: 0,
                    height: 3,
                  }
            },
            headerStyle: {
              backgroundColor: "#065F46",
            },
          }}
        />
        <Stack.Screen
          name="ListaAlumnos"
          component={ListaAlumnos}
          options={{
            title: 'Editar o Eliminar Alumno(s)',
            headerTitleStyle: {
              fontSize: 18, color: 'white',
              textShadowColor: "#000",
              textShadowRadius: 10,
              textShadowOffset: {
                width: 0,
                height: 3,
              }
            },
            headerStyle: {
              backgroundColor: "#065F46",
            },
          }}
        />
        <Stack.Screen
          name="EditarAlumno"
          component={EditarAlumno}
          options={{
            title: 'Editar Alumno(s)',
            headerTitleStyle: {
              fontSize: 20,
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#065F46",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
