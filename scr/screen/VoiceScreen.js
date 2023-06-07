import { SafeAreaView, StyleSheet, Text } from "react-native";

const VoiceScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>VoiceScreen</Text>
      
    </SafeAreaView>
  );
};

export { VoiceScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  
});