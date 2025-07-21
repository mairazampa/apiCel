import { useEffect, useState } from "react";
import { View, Text,TextInput, Button, StyleSheet } from "react-native";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth , database} from "@/config/firebase";
import { router } from "expo-router";
import { Header } from "@/src/components/Header";





export default function SalitaScreen() {





   const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState<User | null>(null);
   const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.replace("/login"); // Si no está logueado, redirige
      } else {
        setUser(currentUser); // Guarda el usuario actual
      }
    });

    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Cargando...</Text>
      </View>
    );
  }
const sendMessage = () => {
    if (!message.trim() || !currentUser) return;

 //   const messagesRef = ref(database, "chat");
  //  push(messagesRef, {
   //   text: message.trim(),
 //     uid: currentUser.uid,
  //    email: currentUser.email,
   //   name: currentUser.displayName ?? "Usuario"//,
//      createdAt: Date.now(),
//    }).catch((error) => {
 //     console.error("Error al enviar mensaje:", error);
//    });

    setMessage("");
  };
  return (
   <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: 10 }}>
      <Header title="Sala de Chat" showLogout />
      
    
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
      
                {/* Cerrar sesión abajo de todo */}
                <View style={{ marginTop: 10 }}>
                  <Button title="Cerrar sesión" onPress={() => auth.signOut()} />
                </View>
              
           
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
