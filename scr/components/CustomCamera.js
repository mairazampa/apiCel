import { Camera, CameraType, getAvailablePictureSizesAsync } from "expo-camera";
import { useRef, useState } from "react";
import { ROUTES } from "../navegation/routes";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { manipulateAsync } from "expo-image-manipulator";

const CustomCamera = () => {
  const navigation = useNavigation();
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return null;
  }

  console.log(permission);
  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          Necesitamos el acceso a la cámara
        </Text>
        <Button onPress={requestPermission} title="Permitir" />
      </View>
    );
  }

  function toggleCameraType() {
    const newType =
      type === CameraType.back ? CameraType.front : CameraType.back;
    setType(newType);
  }

  const takePicture = async () => {
    if (camera.current) {
      const data = await camera.current.takePictureAsync();
      const resized = await manipulateAsync(data.uri, [
        { resize: { height: 100 } },
      ]);
      setImage(data.uri);
      navigation.replace(ROUTES.IMAGE_CHANNEL, { imageUri: resized.uri });
    } else {
      console.warn("Cámara no lista");
    }
  };

  return (
    <View style={{ gap: 5 }}>
      <Camera ref={camera} style={styles.box} type={type} ratio="1:1" />
      <Button title="Cambiar cámara" onPress={toggleCameraType} />
      <Button title="Tomar Foto" onPress={takePicture} />
      {image !== null ? (
        <Image source={{ uri: image }} style={styles.box} />
      ) : (
        <View style={[styles.box, { backgroundColor: "grey" }]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  box: {
    width: 200,
    height: 200,
  },
});

export { CustomCamera };