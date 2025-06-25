import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { colors } from "../theme/colors";

const Header = ({ title }) => (
  <View style={styles.container}>
    <FontAwesome5 name="robot" size={24} color="black" />
    <View>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.headerSubtitleContainer}>
        <View style={styles.headerSubtitleActive} />
        <Text style={styles.headerSubtitleText}>Siempre activo</Text>
      </View>
    </View>
  </View>
);

export { Header };

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 40,
    alignItems: "center",
    gap: 20,
    zIndex: 2,
    marginBottom: 20,
    backgroundColor: colors.background,
  },
  headerTitle: {
    fontFamily: "DM Sans Bold",
    fontSize: 14,
    color: "#202325",
  },
  headerSubtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  headerSubtitleActive: {
    width: 8,
    height: 8,
    backgroundColor: "#7DDE86",
    borderRadius: 4,
  },
  headerSubtitleText: {
    fontFamily: "DM Sans Medium",
    fontSize: 12,
    color: "#72777A",
  },
});