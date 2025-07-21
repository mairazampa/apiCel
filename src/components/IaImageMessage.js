import { Image, View } from "react-native";

const IaImageMessage = ({ message }) => (
  <View
    style={{
      backgroundColor: "#F2F4F5",
      padding: 10,
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
      borderTopRightRadius: 24,
      height: 270,
      width:270,
    }}
  >
    <Image
      style={{
       
          height: 250,
          width:250,
      }}
      source={{uri:message}}
      />
  </View>
);

export { IaImageMessage} ;

