import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screen/HomeScreen";
import { ChatScreen } from "../screen/ChatScreen";
import { ROUTES } from "./routes";
import { ImageScreen } from "../screen/ImageScreen";
import { VoiceScreen } from "../screen/VoiceScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const RootNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen} 
      options={{
        title: "Inicio",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-home" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name={ROUTES.CHAT} component={ChatScreen} 
      options={{
        title: "Chat",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="chatbubbles-sharp" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name={ROUTES.IMAGE} component={ImageScreen} 
      options={{
        title: "Imagen",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="image-sharp" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name={ROUTES.VOICE} component={VoiceScreen} 
      options={{
        title: "Voz",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="mic-sharp" size={size} color={color} />
        )
      }}/>
    </Tab.Navigator>
  </NavigationContainer>
);

export { RootNavigation };