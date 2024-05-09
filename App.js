import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

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
            title: "ESCOLARES-MX TEST",
            headerTitleStyle: {
              fontSize: 20, 
              color: "white", 
            },
            headerStyle: {
              backgroundColor: "#065F46",
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
              fontSize: 20, 
              color: "white", 
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
              fontSize: 20, 
              color: "white", 
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
