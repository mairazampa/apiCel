import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const HomeCuadrado = ({
  
  nombreIcono,
  titulo,
  subtitulo,
  
}) => {
  const [fontsLoaded] = useFonts({
    "DM Sans Bold": require("../../assets/fonts/DMSans/DMSans-Bold.ttf"),
    "DM Sans Medium": require("../../assets/fonts/DMSans/DMSans-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[styles.cuadrado]}>
     
        <Ionicons name={nombreIcono} size={15} color="#0070F0" />
      
  
      <View>
        <Text style={styles.tituloCuadrado}>{titulo}</Text>
        <Text style={styles.subtituloCuadrado}>{subtitulo}</Text>
      </View>
      
    </View>
  );

  
};

const styles = StyleSheet.create({
  cuadrado: {
    
    width: 100,
    height: 100,
    backgroundColor: "white",
    paddingLeft: 18,
    justifyContent: "center",
    flexDirection: "column",
    padding: 12,
    gap:12,
    borderRadius:24,
    
  },
  
  tituloCuadrado: {
    fontSize: 14,
    fontWeight: "DM Sans Bold",
    lineHeight: 20,
    width: 62,
    
   
  },

subtituloCuadrado: {
    fontSize: 12,
    fontWeight: "DM Sans Medium",
    lineHeight: 20,
    width: 62,
    marginTop: 4,
  },
  
  
  
});

export { HomeCuadrado };