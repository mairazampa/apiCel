import { SafeAreaView, StyleSheet, View } from "react-native";
import { colors } from "../theme/colors";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

const SafeScreen = ({ children }) => (
  <View style={styles.container}>
    <View
      style={{
        backgroundColor: colors.background,
        height: Constants.statusBarHeight,
        zIndex: 2,
      }}
    />
    {children}
    <StatusBar style="dark" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export { SafeScreen };