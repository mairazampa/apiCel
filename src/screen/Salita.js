import { ref, onChildAdded, push } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import {
  View,
  TextInput,
  ScrollView,
  Text,
  Button,
  KeyboardAvoidingView,
  Dimensions,
  StyleSheet,
} from "react-native";
import { auth,database } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {SafeScreen}  from "../components/SafeScreen";
import  {Header } from "../components/Header";

const Salita = ({ user }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const scrollRef = useRef();
//let auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const messagesRef = ref(database, "chat");

    const unsubscribe = onChildAdded(messagesRef, (data) => {
      setMessages((prev) => [...prev, data.val()]);
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = () => {
    if (!message.trim() || !currentUser) return;

    const messagesRef = ref(database, "chat");
    push(messagesRef, {
      text: message.trim(),
      uid: currentUser.uid,
      email: currentUser.email,
      name: currentUser.displayName ?? "Usuario",
      createdAt: Date.now(),
    }).catch((error) => {
      console.error("Error al enviar mensaje:", error);
    });

    setMessage("");
  };

  return (
  <SafeScreen>
           <View
          style={{
            marginTop: 20,
            marginHorizontal: 10,
            gap: 20,
            flex: 1,
          }}
        >
          <Header title="Sala Comun" showLogout />
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
          <ScrollView
            style={styles.messagesContainer}
            ref={scrollRef}
            onContentSizeChange={() =>
              scrollRef.current?.scrollToEnd({ animated: true })
            }
          >
            {messages.map((msg, index) => (
              <View
                key={index}
                style={{
                  alignSelf:
                    msg.uid === currentUser?.uid ? "flex-end" : "flex-start",
                  backgroundColor:
                    msg.uid === currentUser?.uid ? "#cce5ff" : "#e5e5e5",
                  borderRadius: 10,
                  padding: 10,
                  marginVertical: 4,
                  maxWidth: "70%",
                }}
              >
                <Text style={{ fontWeight: "bold" }}>
                  {msg.name ?? "Anónimo"}
                </Text>
                <Text>{msg.text}</Text>
                <Text style={{ fontSize: 10 }}>{msg.email}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Campo de entrada y botón */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              value={message}
              onChangeText={setMessage}
              style={{
                borderWidth: 1,
                flex: 1,
                borderRadius: 10,
                padding: 10,
                marginRight: 10,
              }}
              placeholder="Escribí tu mensaje"
            />
            <Button title="Enviar" onPress={sendMessage} />
          </View>

          {/* Cerrar sesión abajo de todo 
          <View style={{ marginTop: 10 }}>
            <Button title="Cerrar sesión" onPress={() => auth.signOut()} />
          </View>
*/}
</KeyboardAvoidingView>
          
        </View>
     </SafeScreen>
  );
};

export  {Salita};

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
 });