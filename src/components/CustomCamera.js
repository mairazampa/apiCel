import { CameraView, useCameraPermissions } from 'expo-camera';
import { router, Stack } from 'expo-router';
import { useLocalSearchParams } from "expo-router";
import React, { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function CustomCamera() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [facing, setFacing] = useState('back'); // cambiamos camara
  const { imageCallbackId } = useLocalSearchParams();
 
  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Necesitamos acceso a la cámara</Text>
        <Button onPress={requestPermission} title="Permitir acceso" />
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      
      console.log('URI de la foto:', photo.uri);

      if (globalThis[imageCallbackId]) {
      globalThis[imageCallbackId](photo.uri);  
    }

      router.back();
    } else {
      console.warn('Cámara no lista');
    }
  };
  return (
<View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <CameraView ref={cameraRef} style={StyleSheet.absoluteFill} facing={facing} />
   
      {/* Botones flotantes*/}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={toggleCameraFacing}>
           <Ionicons name="camera-reverse" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconButton, styles.captureButton]} onPress={takePicture}>
          <Ionicons name="camera" size={32} color="white" />

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => router.push('/image-camera')}
        >
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  message: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
    fontSize: 16,
  },
  permissionButton: {
    backgroundColor: '#841584',
    padding: 12,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: '#00000080',
    padding: 14,
    borderRadius: 40,
  },
  captureButton: {
    backgroundColor: '#1E90FF',
    padding: 18,
  },
});
