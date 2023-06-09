import { Camera, CameraType } from "expo-camera";
import { useRef, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ROUTES } from "../navegation/routes";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { manipulateAsync } from "expo-image-manipulator";

const CustomCamera = () => {
  const navigation = useNavigation();
  const params = useRoute().params;
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
//aqca ademas de tomar la foto
// navigation. goback volvemos a la pantalla anterior 
//en params.addUserImage lo que hace es enviarle a una funncion de otra pantalla
//la foto que enviamos con la nueva manipulacion solo su uri 
  const takePicture = async () => {
    if (camera.current) {
      const data = await camera.current.takePictureAsync();
      const resized = await manipulateAsync(data.uri, [
        { resize: { height: 100 } },
      ]);
      setImage(resized.uri);
      console.log("que es resized.uri",resized.uri);
      params?.addUserImage(resized.uri);
      navigation.goBack();
    } else {
      console.warn("Cámara no lista");
    }
  };

  return (
    <View style={{ gap: 10 }}>
      <Camera ref={camera} style={styles.box} type={type} ratio="1:1" />
      <Button title="Cambiar cámara" color="#841584" onPress={toggleCameraType} />
      <Button title="Tomar Foto" onPress={takePicture} />
      {/* {image !== null ? (
        <Image source={{ uri: image }} style={styles.box} />
      ) : (
        <View style={[styles.box, { backgroundColor: "grey" }]} />
      )} */}
   
    <Button title="volver"
    onPress={() => navigation.navigate(ROUTES.IMAGE)}     
/></View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 74,
  },
  button: {
    flex: 3,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
  box: {
    width: 300,
    height: 300,
    padding:10,
    margin:30,
  },
});

export { CustomCamera };