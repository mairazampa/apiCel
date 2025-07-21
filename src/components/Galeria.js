import {
    Button,
    Image,
    View,
  } from "react-native";
  
  import { useState } from "react";
  

const Galeria = async () =>{
   const [image, setImage] = useState(null);
   const  pickImage = async ()  => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
      });
      
    
           if (!result.canceled) {
               setImage(result.assets[0].uri);
             }
           };
        
           return (
             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               <Button title="Pick an image from camera roll" onPress={pickImage} />
               {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
             </View>
           );
   }
       
   export {Galeria};
     