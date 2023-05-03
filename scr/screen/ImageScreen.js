import {
  Button,
  Image,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Keyboard,
} from "react-native";
import { useRef,useEffect, useState } from "react";
import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { Header } from "../components/Header";
import { CustomCamera } from "../components/CustomCamera";
import { SafeScreen } from "../components/SafeScreen";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { ROUTES } from "../navegation/routes";
import { sendImageToChatbot } from "../services/iaservices";
import { incrementImageResponsesCount } from "../services/cuenta";
import { UserTextMessage } from "../components/UserTextMessage";
import { IaTextMessage } from "../components/IaTextMessage";

const ImageScreen = () => {
const navigation = useNavigation();
  const params = useRoute().params;
  const isFocused = useIsFocused();
  const [question, setQuestion] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const scrollViewRef = useRef(null);

  const fetchApi = async (message) => {
    try {
      const answer = await sendQuestionToChatbot(message);
      let mensajeFinal = answer.mensaje;
      if (!answer.error) {
        incrementImageResponsesCount();
      } else {
        const mensajeFinal = `ERROR: ${mensajeFinal}`;
      }

      setChatMessages((chatMessages) =>
        chatMessages.concat({ message: mensajeFinal, isUser: false })
      );
    } catch (error) {
      console.warn("ERROR", error);
    }
  };

  const _addUserMessage = () => {
    Keyboard.dismiss();
    if (question !== "") {
      setChatMessages(chatMessages.concat({ message: question, isUser: true }));
      fetchApi(question);
      setQuestion("");
    }
  };
  const sendImage = async (imageUri) => {
    const responseImg = await sendImageToChatbot(imageUri);
    setChatMessages((chatMessages) =>
      chatMessages.concat({ imageUri: responseImg, isUser: false })
    );
  };

  useEffect(() => {
    if (isFocused && params?.imageUri) {
      setChatMessages((chatMessages) =>
        chatMessages.concat({ imageUri: params.imageUri, isUser: true })
      );
      sendImage(params.imageUri);
      navigation.setParams({ imageUri: undefined });
    }
  }, [isFocused, params]);

  return (
    <SafeScreen>
      <Header title="Canal de Imagen" />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <ScrollView
          style={styles.messagesContainer}
          contentContainerStyle={{ gap: 20 }}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
        >
          {chatMessages.map((msg, index) =>
            msg.isUser ? (
              <UserTextMessage message={msg.message} key={index} />
            ) : (
              <IaTextMessage message={msg.message} key={index} />
            )
          )}
        </ScrollView>
        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}
        >
          <View style={styles.inputContainer}>
            <Ionicons
              name="camera"
              size={24}
              color="white"
              onPress={() => navigation.navigate(ROUTES.CAMERA)}
            />
            <Ionicons 
            name="image" 
            size={24} 
            color="white" 
            onPress={() => navigation.navigate(ROUTES.IMAGE_CHANNEL)}/>
          </View>
          <Ionicons.Button
            name="ios-paper-plane-outline"
            size={24}
            color="white"
            backgroundColor="#303437"
            borderRadius={24}
            iconStyle={{ marginLeft: 5, marginTop: 2 }}
            onPress={_addUserMessage}
          />
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
    marginHorizontal: 10,
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