import {
    Button,
    Image,
    View,
  } from "react-native";
  import { Camera, CameraType, getAvailablePictureSizesAsync } from "expo-camera";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { Ionicons } from "@expo/vector-icons";
  import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";
  import { useState } from "react";
  import Constants from "expo-constants";
  
  import { SafeScreen } from "../components/SafeScreen";
  import { Header } from "../components/Header";

const Galeria = async () =>{
    const [image, setImage] = useState(null);
   //     if (!permission) {
   //         // Camera permissions are still loading
   //         return null;
   //       }
   //       console.log(permission);
   //   if (!permission.granted) {
   //     // Camera permissions are not granted yet
   //     return (
   //       <View style={styles.container}>
   //         <Text style={{ textAlign: "center" }}>
   //           Necesitamos el acceso a la cámara
   //         </Text>
   //         <Button onPress={requestPermission} title="Permitir" />
   //       </View>
   //     );
   //   }
   
   //     return (
   //       <SafeScreen>
   //         <CustomCamera />
   //       </SafeScreen>
   //     );
    // };
     
    
     
     
   const  pickImage = async ()  => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
      });
        // //    const navigation = useNavigation();
        // //    // No permissions request is necessary for launching the image library
        // //    const data = await ImagePicker.launchImageLibraryAsync();
        // //    const resized = await manipulateAsync(data.uri, [
        // //        { resize: { height: 100 } },
        // //      ]);
              
        //      setImage(resized.assets[0].uri);
        //          console.log("que es resized.uri",resized.uri);
        //          params?.addUserImage(resized.assets[0].uri);
        //          navigation.goBack();
        //        //Images,
          
   
           //       console.log(result);
   
    
           if (!result.canceled) {
               setImage(result.assets[0].uri);
             }
           };
        
           return (
             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               <Button title="Pick an image from camera roll" onPress={pickImage} />
               {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
             </View>
           );
   }
               
   //         if (result.canceled) {
   //             setImage(result.assets[0].uri);
   //         }
   //       };
       
   //       return (
           
   //        <SafeAreaView style={styles.container}>
   //          <Text>ImageScreen</Text>
   //         <ScrollView>
   //            <View>
   //              <Button
   //                title="Elegir desde la galería"
   //               onPress={_handleGalleryPress}
   //             />
   //              {Image !== null ? (
   //              <Image source={{ uri: Image }} style={styles.box} />
   //              ) : (
   //                <View style={[styles.box, { backgroundColor: "grey" }]} />
   //              )}
   //            </View>
   //           <View
   //              style={{ marginVertical: 10, height: 15, backgroundColor: "blue" }}
   //           />
             
   //          </ScrollView>
   //        </SafeAreaView>
   //      );
   //     }
     
     
   //    const styles = StyleSheet.create({
   //      container: {
   //        flex: 1,
   //        gap: 20,
   //        marginTop: Constants.statusBarHeight,
   //        alignItems: "center",
   //     },
   //      box: {
   //        width: 200,
   //        height: 200,
   //      },
   //    });
   
   //   //const styles = StyleSheet.create({});
   export { Galeria };
     