import { StyleSheet, Text, View } from "react-native";

const UserTextMessage = ({ message }) => (
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
      {message}
    </Text>
  </View>
);

export { UserTextMessage };

const styles = StyleSheet.create({});