import { StyleSheet, Text, View } from "react-native";

const IaTextMessage = ({ message }) => (
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
      {message}
    </Text>
  </View>
);

export { IaTextMessage };

const styles = StyleSheet.create({});