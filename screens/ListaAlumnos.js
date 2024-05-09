import React, { useState, useEffect } from 'react';
import { Text, View, Button, ScrollView, Alert } from 'react-native';

export default function ListaAlumnos({ navigation }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [editId, setEditId] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchAlumnos();
  }, []);

  const editarAlumno = async (id) => {
    try {
      setSaving(true);
      const response = await fetch(`http://webservices.mx/escolares/test/alumnos/guardar/${id}`, {
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
      // Actualizar el alumno editado en la lista
      setData(prevData => {
        const newData = prevData.map(alumno => {
          if (alumno.id === id) {
            return {
              ...alumno,
              clave: curpForm.toUpperCase(),
              matricula: matriculaForm,
              paterno: paternoForm,
              materno: maternoForm,
              nombre: nombreForm
            };
          }
          return alumno;
        });
        return newData;
      });
      // Limpiar el estado de edición
      setEditId(null);
      // Limpiar los campos del formulario después de editar el alumno
      setCurpForm('');
      setMatriculaForm('');
      setPaternoForm('');
      setMaternoForm('');
      setNombreForm('');
      Alert.alert('Alumno editado correctamente');
    } catch (error) {
      console.error('Error al editar alumno: ', error);
    } finally {
      setSaving(false);
    }
  };

  const fetchAlumnos = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://webservices.mx/escolares/test/alumnos/listar');
      const text = await response.text();
      const json = text ? JSON.parse(text) : {};
      setData(json.response);
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteAlumno = async (id) => {
    try {
      setDeletingId(id);
      const response = await fetch(`http://webservices.mx/escolares/test/alumnos/eliminar/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const json = await response.json();
      console.log('Response', json);
      // Filtrar la lista de alumnos para eliminar el alumno por su ID
      setData(prevData => prevData.filter(alumno => alumno.id !== id));
      Alert.alert('Alumno eliminado correctamente');
    } catch (error) {
      console.error('Error al eliminar alumno: ', error);
    } finally {
      setDeletingId(null);
    }
  };

  const handleEdit = (alumno) => {
    navigation.navigate('EditarAlumno', { alumno });
  };

  return (
    <ScrollView className="flex pt-2">
      <View className="h-fit w-screen">
        {loading ? (
          <Text class="flex justify-center items-center p-5">
            Cargando...
          </Text>
        ) : data && data.length > 0 ? (
          <View className="mb-20">
            {data.map((alumno, index) => (
              <View key={index} className="m-2 items-center">
                <Text>Nombre: {alumno.nombre_completo}</Text>
                <Text>Matricula: {alumno.matricula}</Text>
                <View className="flex-row">
                  <Button title={saving ? "Espere un momento, guardando datos" : "Editar"} onPress={() => handleEdit(alumno)} />
                  <Button title={deletingId === alumno.id ? "Eliminando datos, por favor espere" : "Eliminar"} onPress={() => deleteAlumno(alumno.id)} disabled={saving || deletingId === alumno.id} />
                </View>
              </View>
            ))}
          </View>
        ) : (
          <Text className="p-5 text-center">No hay datos disponibles</Text>
        )}
      </View>
    </ScrollView>
  );
}
