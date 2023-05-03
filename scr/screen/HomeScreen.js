  import {Pressable,StyleSheet,Text,View} from "react-native";
  import { useNavigation, useIsFocused } from "@react-navigation/native";
  import { HomeLink } from "../components/HomeLink";
  import { HomeCuadrado } from "../components/HomeCuadrado";
  import { ROUTES } from "../navegation/routes";
  import { SafeScreen } from "../components/SafeScreen";
  import { useEffect, useState } from "react";
  import {
    getImageResponsesCount,
    getTextResponsesCount,
  } from "../services/cuenta";
  

  
const homeCardLinkData = [
  {
    colorFondo: "#FFF9F0",
    colorAccionTexto: "#A05E03",
    titulo: "Canal de texto",
    subtitulo: "Chatea con la IA",
    accionTexto: "chateá",
    routeName: ROUTES.CHAT,
  },
  {
    colorFondo: "#F0F0FF",
    colorAccionTexto: "#5555CB",
    titulo: "Canal de imagen",
    subtitulo: "Imágenes desde en imágenes",
    accionTexto: "creá",
    routeName: ROUTES.IMAGE,
  },
];


  
  const HomeScreen = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [analalyticsCount, setAnalalyticsCount] = useState([]);
  
    const navToScreen = (routeName) => () => navigation.navigate(routeName);
  
    const getCountValues = async () => {
      const textCount = await getTextResponsesCount();
      const imageCount = await getImageResponsesCount();
  
      setAnalalyticsCount([
        {
          key: "textCount",
          iconName: "chatbubbles-sharp",
          data: textCount,
          description: "Rtas gen.",
          routeName: ROUTES.CHAT,
        },
        {
          key: "imageCount",
          iconName: "image",
          data: imageCount,
          description: "Img. gen.",
          routeName: ROUTES.IMAGE,
        },
      ]);
    };
  
    useEffect(() => {
      if (isFocused) {
        getCountValues();
      }
    }, [isFocused]);
  
    return (
      <SafeScreen>
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 10,
            gap: 20,
            flex: 1,
          }}
        >
          <View>
            <Text style={styles.titulo}>Inicio</Text>
            <Text style={styles.subtitulo}>Resumen</Text>
          </View>
  
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {analalyticsCount.map((item) => (
              <Pressable onPress={navToScreen(item.routeName)} key={item.titulo}>
              <HomeCuadrado {...item} />
              </Pressable>
            ))}
          </View>
          <View
            style={{
              flex: 1,
              gap: 25,
            }}
          >
            {homeCardLinkData.map((item) => (
              <Pressable onPress={navToScreen(item.routeName)} key={item.titulo}>
                <HomeLink {...item} />
              </Pressable>
            ))}
          </View>
        </View>
      </SafeScreen>
    );
  };
  
  export { HomeScreen };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titulo: {
      fontSize: 24,
      fontWeight: "bold",
      lineHeight: 32,
    },
    subtitulo: {
      fontSize: 18,
      fontWeight: "bold",
      lineHeight: 24,
    },
    cuadrado: {
      width: 100,
      height: 100,
      backgroundColor: "yellow",
    },
  });