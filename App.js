import { useFonts } from "expo-font";
import { RootNavigation } from "./scr/navegation/RootNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    "DM Sans Bold": require("./assets/fonts/DMSans/DMSans-Bold.ttf"),
    "DM Sans Medium": require("./assets/fonts/DMSans/DMSans-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return <RootNavigation />;
}
