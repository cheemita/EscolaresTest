import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const EditarAlumno = ({ route, navigation }) => {
    const { alumno } = route.params;
    const [curpForm, setCurpForm] = useState(alumno.clave);
    const [matriculaForm, setMatriculaForm] = useState(alumno.matricula);
    const [paternoForm, setPaternoForm] = useState(alumno.paterno);
    const [maternoForm, setMaternoForm] = useState(alumno.materno || '');
    const [nombreForm, setNombreForm] = useState(alumno.nombre);
    const [saving, setSaving] = useState(false);

    const editarAlumno = async () => {
        try {
            setSaving(true);
            const response = await fetch(`http://webservices.mx/escolares/test/alumnos/guardar/${alumno.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    clave: curpForm.toUpperCase(),
                    matricula: matriculaForm,
                    paterno: paternoForm,
                    materno: maternoForm,
                    nombre: nombreForm
                })
            });
            const text = await response.text();
            const json = text ? JSON.parse(text) : {};
            console.log('Response', json);
            Alert.alert('Alumno editado correctamente');
            navigation.goBack(); // Volver a la pantalla anterior después de editar
        } catch (error) {
            console.error('Error al editar alumno: ', error);
        } finally {
            setSaving(false);
        }
    };

    const handleCurpChange = (text) => {
        // Limitar la CURP a 18 caracteres y convertirla en mayúsculas
        if (text.length <= 18) {
            setCurpForm(text.toUpperCase());
        }
    };

    return (
        <View className="flex justify-center p-5">
            <TextInput
                className="p-5 bg-white rounded-full mb-5"
                value={curpForm}
                onChangeText={handleCurpChange}
                maxLength={18}
                placeholder="CURP"
            />
            <TextInput
                className="p-5 bg-white rounded-full mb-5"
                value={matriculaForm}
                onChangeText={setMatriculaForm}
                placeholder="Matricula"
            />
            <TextInput
                className="p-5 bg-white rounded-full mb-5"
                value={paternoForm}
                onChangeText={setPaternoForm}
                placeholder="Apellido Paterno"
            />
            <TextInput
                className="p-5 bg-white rounded-full mb-5"
                value={maternoForm}
                onChangeText={setMaternoForm}
                placeholder="Apellido Materno"
            />
            <TextInput
                className="p-5 bg-white rounded-full mb-5"
                value={nombreForm}
                onChangeText={setNombreForm}
                placeholder="Nombre"
            />
            <Button
                title={saving ? "Espere un momento, guardando datos" : "Guardar"}
                onPress={editarAlumno}
                disabled={saving}
            />
        </View>
    );
};

export default EditarAlumno;
