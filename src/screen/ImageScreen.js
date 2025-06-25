import { Ionicons } from "@expo/vector-icons";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View
} from "react-native";
import { Header } from "../components/Header";
import { IaImageMessage } from "../components/IaImageMessage";
import { SafeScreen } from "../components/SafeScreen";
import { UserImageMessage } from "../components/UserImageMessage";
import { incrementImageResponsesCount } from "../services/cuenta";
import { sendImageToChatbot } from "../services/iaservices";



const ImageScreen = () => {
const navigation = useNavigation();
const params = useRoute().params;
const isFocused = useIsFocused();
const [chatMessages, setChatMessages] = useState([]);
const scrollViewRef = useRef(null);




  //la siguiente funcion para sacar fotos con la camara 
  const addUserImage = (imageUri) => {
    console.log("Ruta de la imagen que sacamos", imageUri)
    setChatMessages((chatMessages) =>
      chatMessages.concat({ message: imageUri, isUser: true })
    );
    sendImage(imageUri);
    console.log("Enviamos la siguiente ruta a Send Image", imageUri)
  };

  //seleccionamos de la galeria 
 
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({  
    });
    if (!result.canceled) {
      addUserImage(result.assets[0].uri);
    }
  };


  //aca me devuelve la imagen la API 
  const sendImage = async (imageUri) => {
    const responseImg = await sendImageToChatbot(imageUri);
    console.log("La ruta que enviamos a send IMageToChatbot", imageUri)
    if (!responseImg.error){
      incrementImageResponsesCount();
    }
    setChatMessages((chatMessages) =>
      
      chatMessages.concat({ message: responseImg, isUser: false })
    );
  };
   



       
  

  return (
    <SafeScreen>
      <Header title="Canal de Imagen" />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <ScrollView
          style={styles.messagesContainer}
          contentContainerStyle={{ gap: 20 , paddingBottom: 20 }}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
        >
          {chatMessages.map((msg, index) =>
            msg.isUser ? (
              <UserImageMessage style={{ justifyContent: "center" }} message={msg.message} key={index} />
            ) : 
             (
               <IaImageMessage message={msg.message} key={index} />
             )
          )}
        </ScrollView>
      
        <View
        //agregamos un div para los botones de camara y galeria 
          style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}
        >
          <View style={styles.inputContainer}>
            <Ionicons
              name="camera"
              size={24}
              color="white"
              onPress={() => {
                // navego a la pantalla de camara y le paso un objeto que podrá usar
                // el objeto tiene una propiedad addUserImage con la definicion de la funcion
                // de igual nombre
                // de esta forma la pantalla de camara podrá usarla
                router.push("/camera", {
                  params: {addUserImage: addUserImage }
                });
              }}
            />
            <Ionicons 
            name="image" 
            size={24} 
            color="white" 
            onPress={pickImage}
            />
            
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeScreen>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  messagesContainer: {
    height: Dimensions.get("screen").height * 0.7,
    marginHorizontal: 20,
    
    borderColor: "#979C9E",
  },
  inputContainer: {
    
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    width: 100,
    padding: 10,
   
    
  },
});

export { ImageScreen };
