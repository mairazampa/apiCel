import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";
import { router } from "expo-router";

export default function SalaScreen() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace("/salita");
      } else {
        router.replace("/login");
      }
    });

    return unsubscribe;
  }, []);

  return null; 
}