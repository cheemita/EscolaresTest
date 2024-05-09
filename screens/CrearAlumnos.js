import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';

export default function CrearAlumnos({ onAdd, navigateToHome }) {
  const [curpForm, setCurpForm] = useState('');
  const [matriculaForm, setMatriculaForm] = useState('');
  const [paternoForm, setPaternoForm] = useState('');
  const [maternoForm, setMaternoForm] = useState('');
  const [nombreForm, setNombreForm] = useState('');
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!curpForm || curpForm.length !== 18) {
      errors.curp = 'La CURP debe tener 18 caracteres';
      valid = false;
    }

    if (!matriculaForm) {
      errors.matricula = 'La matrícula es obligatoria';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const postData = async () => {
    try {
      if (!validateForm()) return;

      setSaving(true);
      await fetch('http://webservices.mx/escolares/test/alumnos/agregar', {
        method: 'POST',
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
      onAdd && onAdd();
      // Limpiar los campos del formulario después de enviar los datos
      setCurpForm('');
      setMatriculaForm('');
      setPaternoForm('');
      setMaternoForm('');
      setNombreForm('');
      Alert.alert('Alumno agregado correctamente');
      // Navegar de vuelta a la pantalla de inicio
      navigateToHome && navigateToHome();
    } catch (error) {
      console.error('Error al crear dato: ', error);
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
    <ScrollView className="flex pt-2" >
      {/* Aquí se hace el posteo de los datos */}
      <View className="h-fit w-screen">
        <View className="p-3">
          <TextInput
            className="p-5 bg-white rounded-full mb-5"
            onChangeText={handleCurpChange}
            value={curpForm}
            placeholder="Inserte la CURP" />
          {errors.curp && <Text style={{ color: 'red' }}>{errors.curp}</Text>}
          <TextInput
            className="p-5 bg-white rounded-full mb-5"
            onChangeText={text => setMatriculaForm(text)}
            value={matriculaForm}
            placeholder="Matricula" />
          {errors.matricula && <Text style={{ color: 'red' }}>{errors.matricula}</Text>}
          <TextInput
            className="p-5 bg-white rounded-full mb-5"
            onChangeText={text => setPaternoForm(text)}
            value={paternoForm}
            placeholder="Inserte apellido paterno" />
          <TextInput
            className="p-5 bg-white rounded-full mb-5"
            onChangeText={text => setMaternoForm(text)}
            value={maternoForm}
            placeholder="Inserte apellido materno" />
          <TextInput
            className="p-5 bg-white rounded-full"
            onChangeText={text => setNombreForm(text)}
            value={nombreForm}
            placeholder="Inserte nombre" />
        </View>
        <Button className="" title={saving ? "Espere un momento, enviando datos" : "Enviar datos"} onPress={postData} disabled={saving} />
      </View>
    </ScrollView>
  );
}
