import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screen/HomeScreen";
import { ChatScreen } from "../screen/ChatScreen";
import { SalaScreen } from "../screen/SalaScreen";
import { ROUTES } from "./routes";
import { ImageScreen } from "../screen/ImageScreen";
import { CameraScreen } from "../screen/CameraScreen";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const ImageStack = createStackNavigator();
const ImageNavigator = () => (
  <ImageStack.Navigator screenOptions={{ headerShown: false }}>
    <ImageStack.Screen name={ROUTES.IMAGE} component={ImageScreen} /> 
    <ImageStack.Screen name={ROUTES.CAMERA} component={CameraScreen} />
    <ImageStack.Screen name={ROUTES.SALA} component={SalaScreen} />
  </ImageStack.Navigator>
);

const CustomTabBarIcon = ({ focused, iconName, label }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
      backgroundColor: focused ? "black" : "transparent",
      padding: 10,
      borderRadius: 30,
      height: 40,
    }}
  >
    <Ionicons name={iconName} size={20} color={focused ? "white" : "#72777A"} />
    {focused && <Text style={{ color: "white" }}>{label}</Text>}
  </View>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarHideOnKeyboard: true,
    }}
  >
    <Tab.Screen
      name={ROUTES.HOME}
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <CustomTabBarIcon focused={focused} iconName="home" label="INICIO" />
        ),
      }}
    />
    <Tab.Screen
      name={ROUTES.CHAT}
      component={ChatScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <CustomTabBarIcon
            focused={focused}
            iconName="chatbubbles-sharp"
            label="TEXTO"
          />
        ),
      }}
    />
    <Tab.Screen
      name={ROUTES.IMAGE}
      component={ImageNavigator}
      options={{
        tabBarIcon: ({ focused }) => (
          <CustomTabBarIcon focused={focused} iconName="image" label="IMAGE" />
        ),
      }}
    />
    <Tab.Screen
      name={ROUTES.SALA}
      component={SalaScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <CustomTabBarIcon focused={focused} iconName="chatbubbles-outline" label="SALA" />
        ),
      }}
    />
  </Tab.Navigator>
);

const RootNavigation = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);


export { RootNavigation };