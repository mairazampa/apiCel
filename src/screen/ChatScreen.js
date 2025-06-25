import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { Header } from "../components/Header";
import { IaTextMessage } from "../components/IaTextMessage";
import { SafeScreen } from "../components/SafeScreen";
import { UserTextMessage } from "../components/UserTextMessage";
import { incrementTextResponsesCount } from "../services/cuenta";
import { sendQuestionToChatbot } from "../services/iaservices";


const ChatScreen = () => {
  const [question, setQuestion] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const scrollViewRef = useRef(null);

  const fetchApi = async (message) => {
    try {
      const answer = await sendQuestionToChatbot(message);
      let mensajeFinal = answer.mensaje;
       if (!answer.error) {
        incrementTextResponsesCount();
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

  return (
    <SafeScreen>
      <Header title="Canal de Texto" />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <ScrollView
          style={styles.messagesContainer}
          contentContainerStyle={{ gap: 20 , paddingBottom: 20}}
          //lo usamos para que los mensajes vayan subiendo 
          //asi no tenemos que bajar cada vez que enviamos una consulta
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }>
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
            <TextInput
              style={{ width: 260, height: 40, paddingHorizontal: 10 }}
              value={question}
              onChangeText={setQuestion}
              onSubmitEditing={_addUserMessage}
            />
          </View>
    
          <Ionicons.Button
            name="paper-plane"
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

export { ChatScreen };

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
    width: 265,
    height: 45,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#979C9E",
  },
});