import {
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

import { SafeScreen } from "../components/SafeScreen";
import { useState } from "react/cjs/react.development";
import { colors } from "../theme/colors";

const ChatScreen = () => {
  const [texto, setTexto] = useState("");
  const [msgs, setMsgs] = useState([]);

  return (
    <SafeScreen>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 40,
          alignItems: "center",
          gap: 20,
          zIndex: 2,
          marginBottom: 20,
          backgroundColor: colors.background,
        }}
      >
        
        <FontAwesome5 name="robot" size={24} color="black" />
        <View>
          <Text
            style={{
              fontFamily: "DM Sans Bold",
              fontSize: 14,
              color: "#202325",
            }}
          >
            Canal de Texto
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: "#7DDE86",
                borderRadius: 4,
              }}
            />
            <Text
              style={{
                fontFamily: "DM Sans Medium",
                fontSize: 12,
                color: "#72777A",
              }}
            >
              Siempre activo
            </Text>
          </View>
        </View>
      </View>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <ScrollView
          style={{
            height: Dimensions.get("screen").height * 0.7,
            marginHorizontal: 10,
          }}
          contentContainerStyle={{ gap: 20 }}
        >
          {/* <View
            style={{
              backgroundColor: "#0070F0",
              padding: 10,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              borderBottomLeftRadius: 24,
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "DM Sans Medium",
                fontSize: 15,
                lineHeight: 24,
              }}
            >
              Hola, podrías contarme en 1 párrafo en que consiste la ley de
              Moore?
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#F2F4F5",
              padding: 10,
              borderBottomLeftRadius: 24,
              borderBottomRightRadius: 24,
              borderTopRightRadius: 24,
            }}
          >
            <Text
              style={{
                color: "#303437",
                fontFamily: "DM Sans Medium",
                fontSize: 15,
                lineHeight: 24,
              }}
            >
              La Ley de Moore es una observación hecha por el cofundador de
              Intel, Gordon Moore, en 1965, que afirmaba que el número de
              transistores en un microprocesador se duplicaría aproximadamente
              cada dos años, lo que conduciría a un aumento constante en la
              capacidad de procesamiento y disminución en el costo. Esta ley se
              ha mantenido en gran medida cierta durante décadas y ha impulsado
              el rápido avance de la tecnología informática y la electrónica,
              aunque se ha hecho cada vez más difícil mantener su ritmo en los
              últimos años debido a limitaciones físicas y técnicas.
            </Text>
          </View> */}
          {msgs.map((msg) => (
            <View
              style={{
                backgroundColor: "#0070F0",
                padding: 10,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                borderBottomLeftRadius: 24,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "DM Sans Medium",
                  fontSize: 15,
                  lineHeight: 24,
                }}
              >
                {msg}
              </Text>
            </View>
          ))}
        </ScrollView>
        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}
        >
          <View
            style={{
              width: 265,
              height: 45,
              borderRadius: 22,
              borderWidth: 1,
              borderColor: "#979C9E",
            }}
          >
            <TextInput
              style={{ width: 260, height: 40, paddingHorizontal: 10 }}
              value={texto}
              onChangeText={setTexto}
              onEndEditing={() => {
                setMsgs(msgs.concat(texto));
                setTexto("");
              }}
            />
          </View>
          <Ionicons.Button
            name="ios-paper-plane-outline"
            size={24}
            color="white"
            backgroundColor="#303437"
            borderRadius={24}
            iconStyle={{ marginLeft: 5, marginTop: 2 }}
            onPress={() => {
              setMsgs(msgs.concat(texto));
              setTexto("");
              // llamada a la api
            }}
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
});