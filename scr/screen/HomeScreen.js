import {
    Button,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import { Ionicons } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  import { HomeLink } from "../components/HomeLink";
  import { HomeCuadrado } from "../components/HomeCuadrado";
  import { ROUTES } from "../navegation/routes";

  
  const HomeScreen = () => {
    const navigation = useNavigation();
  
    const _handlePress = () => {
      navigation.navigate(ROUTES.CHAT);
      
    };
     const _handlePress1 = () => {
        navigation.navigate(ROUTES.IMAGE);
        
      };

      const _handlePress2 = () => {
        navigation.navigate(ROUTES.VOICE);
        
      };
 
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            marginTop: 30,
            marginHorizontal: 10,
            flex: 1,
          }}
        >
          <Text style={styles.titulo}>Inicio</Text>
          <Text style={styles.subtitulo}>Resumen</Text>
  
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
                <Pressable onPressIn={_handlePress}>
                <HomeCuadrado
                    
                    nombreIcono= "chatbubbles-sharp"
                    titulo={3950}
                    subtitulo="Rtas gen."
                    
                />

               </Pressable>
                <Pressable onPressIn={_handlePress1}>
                <HomeCuadrado
                   
                    nombreIcono= "image-sharp"
                    titulo={1000}
                    subtitulo="Img gen"
                    
                />

                

                </Pressable>
                <Pressable onPressIn={_handlePress2}>
                <HomeCuadrado
                    
                    nombreIcono= "mic-sharp"
                    titulo={15}
                    subtitulo="Trad real"
                    
                />

                </Pressable>
                </View>

         
            {/* <View style={styles.cuadrado}>
              <Text>
                <Ionicons name="chatbubbles-sharp" size={15} color="#0070F0" />
                <Text style={styles.tituloCuadrado} >3.950</Text>
                <Text style={styles.subtituloCuadrado} >Rtas gen.</Text>
              </Text>
            </View>
  
            <View style={styles.cuadrado}>
              <Text>
              <Ionicons name="image-sharp" size={15} color="#0070F0" position= "absolute" left="12.83% " />
              <Text style={styles.tituloCuadrado}>1.000</Text>
              <Text style={styles.subtituloCuadrado} >Img. gen.</Text>
              </Text>
            </View>
            <View style={styles.cuadrado}>
              <Text>
              <Ionicons name="mic-sharp" size={15} color="#0070F0" />
              <Text style={styles.tituloCuadrado}>15</Text>
              <Text style={styles.subtituloCuadrado} >Trad. real.</Text>
              </Text>
            </View>
            
              <Button title="ESTO ES UN BOTON" />*/}
          
   
          <View
            style={{
              flex: 1,
              justifyContent: "space-around",
            }}
          >
          
            <Pressable onPressIn={_handlePress}>
              <HomeLink
                colorFondo="#FFF9F0"
                colorAccionTexto="#A05E03"
                titulo="Canal de texto"
                subtitulo="Chatea con la IA"
                accionTexto="chateá"
              />
            </Pressable>

            <Pressable onPressIn={_handlePress1}>
            <HomeLink
              colorFondo="#F0F0FF"
              colorAccionTexto="#5555CB"
              titulo="Canal de imagen"
              subtitulo="Imágenes desde en imágenes"
              accionTexto="creá"
            />
            </Pressable>

            <Pressable onPressIn={_handlePress2}>
            <HomeLink
              colorFondo="#FFF0FD"
              colorAccionTexto="#CB55AA"
              titulo="Canal de voz"
              subtitulo="Convertí voz a texto"
              accionTexto="hablá"
            />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
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
    tituloCuadrado: {
        fontSize: 14,
        fontWeight: "DM Sans",
        lineHeight: 20,
        width: 62,
        
       
      },

    subtituloCuadrado: {
        fontSize: 12,
        fontWeight: "DM Sans",
        lineHeight: 20,
        width: 62,
        marginTop: 4,
      },
    cuadrado: {
      width: 100,
      height: 100,
      backgroundColor: "white",
      paddingLeft: 18,
      justifyContent: "center",
      flexDirection: "column",
      
      padding: 12,
      gap:12,
      borderRadius:24,
      
      
    },
  });