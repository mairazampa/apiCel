import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

const HomeCuadrado = ({ iconName, data, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} color={colors.iconColor} size={15} />
      </View>
      <Text style={styles.data}>{data}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );

  
};


const styles = StyleSheet.create({
  container: {
    
    width: 100,
    height: 120,
    gap: 5,
    justifyContent: "center",
    backgroundColor: "white",
    paddingLeft: 10,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  data: {
    fontFamily: "DM Sans Bold",
    fontSize: 14,
    color: "#303437",
  },
  description: {
    color: "#72777A",
    fontFamily: "DM Sans Medium",
    fontSize: 16,
  },
  iconContainer: {
    backgroundColor: "#F2F8FF",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F8FF",
    borderRadius: 16,
    width: 32,
    height: 32,
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