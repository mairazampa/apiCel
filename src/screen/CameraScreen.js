import {
  StyleSheet
} from "react-native";

import CustomCamera from "../components/CustomCamera";
import { SafeScreen}  from "../components/SafeScreen";
  
const CameraScreen = () => {
    return (
      <SafeScreen>
        <CustomCamera />
      </SafeScreen>
    );
  };
  
const styles = StyleSheet.create({});
  
export default CameraScreen;

  