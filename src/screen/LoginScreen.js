import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
  GoogleAuthProvider,
  signInWithCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";

//import  { auth }  from "../../config/firebase";
import { useRouter } from "expo-router";
import { SafeScreen } from "../components/SafeScreen";

WebBrowser.maybeCompleteAuthSession();
const LoginScreen= () => {
  
//export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mode, setMode] = useState("login"); // "login" o "register"

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "167269217952-226teuc8eh3rm32qfqhff87kaja8p8j1.apps.googleusercontent.com",
    webClientId:
      "167269217952-226teuc8eh3rm32qfqhff87kaja8p8j1.apps.googleusercontent.com",
      androidClientId: 
      "167269217952-226teuc8eh3rm32qfqhff87kaja8p8j1.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  });

  useEffect(() => {
    if (response?.type === "success") {
      const accessToken = response.authentication?.accessToken;
      if (accessToken) {
        const credential = GoogleAuthProvider.credential(null, accessToken);
       // signInWithCredential(auth, credential).catch((err) =>
           signInWithCredential( credential).catch((err) =>
          alert("Error al iniciar sesión con Google: " + err.message)
        );
      }
    }
  }, [response]);

  useEffect(() => {
//    if (!auth) return;
 //   const unsubscribe = onAuthStateChanged(auth, (user) => {
      const unsubscribe = onAuthStateChanged( (user) => {
      if (user) router.replace("/salita");
    });
    return unsubscribe;
  }, []);

  const handleEmailAction = () => {
    if (!email || !password) return alert("Completá los campos");
    if (mode === "login") {
      signInWithEmailAndPassword(auth, email, password).catch((err) =>
        alert("Error: " + err.message)
      );
    } else {
   //   createUserWithEmailAndPassword(auth, email, password).catch((err) =>
     //   alert("Error al registrarse: " + err.message)
     // );
  //   createUserWithEmailAndPassword(auth, email, password)
      createUserWithEmailAndPassword( email, password)
  .then((userCredential) => {
    return updateProfile(userCredential.user, {
      displayName: name,
      }).then(() => {
      alert("Registro exitoso");
   //   router.replace("/reunion");
      router.replace("/salita");
    });
  })
  .catch((err) =>
    alert("Error al registrarse: " + err.message)
  );
    }
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
 
        <Text style={styles.title}>
          {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
        </Text>

        <View style={styles.inputContainer}>
             <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={name}
          onChangeText={setName}
        />
          <TextInput
            placeholder="Correo electrónico"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Contraseña"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={handleEmailAction}>
          <Text style={styles.primaryButtonText}>
            {mode === "login" ? "Ingresar" : "Registrarse"}
          </Text>
        </TouchableOpacity>

        <Text style={styles.or}>o</Text>

        <TouchableOpacity style={styles.googleButton} onPress={() => promptAsync()}>
    <Image
  source={require('../../assets/images/goog.png')}
  style={styles.googleIcon}
/>
          <Text style={styles.googleText}>Continuar con Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setMode(mode === "login" ? "register" : "login")}
          style={{ marginTop: 20 }}
        >
          <Text style={styles.switchMode}>
            {mode === "login"
              ? "¿No tenés cuenta? Registrate"
              : "¿Ya tenés cuenta? Iniciá sesión"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 20,
    padding: 24,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "DM Sans Bold",
    marginBottom: 16,
    textAlign: "center",
  },
  inputContainer: {
    gap: 12,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  primaryButton: {
    backgroundColor: "#1e90ff",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "DM Sans Medium",
  },
  or: {
    textAlign: "center",
    marginVertical: 12,
    color: "#999",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    backgroundColor: "#fff",
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  googleText: {
    fontSize: 16,
    fontFamily: "DM Sans Medium",
  },
  switchMode: {
    color: "#1e90ff",
    textAlign: "center",
    fontSize: 14,
  },
});
export  {LoginScreen};