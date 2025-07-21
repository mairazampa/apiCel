import { View, Image} from "react-native";


const UserImageMessage = ({ message }) => (
  <View
    style={{
      backgroundColor: "#0070F0",
      padding: 10,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      borderBottomLeftRadius: 24,
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

export { UserImageMessage };