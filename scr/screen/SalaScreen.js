import {
    Button,
    Dimensions,
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from "react-native";

  import { SafeScreen } from "../components/SafeScreen";
  import {
    useIsFocused,
    useNavigation,
    useRoute,
  } from "@react-navigation/native";
  import { ROUTES } from "../navegation/routes";
  const SalaScreen = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);

  
  return (
    <SafeScreen>
      <Header title="Sala Comun" />
      



      
           </SafeScreen>
       
  )
        };
  export { SalaScreen };