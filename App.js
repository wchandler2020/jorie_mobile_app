import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./src/screens/Home/HomeScreen";
import SplashScreen from "./src/screens/SplashScreen/SplashScreen";
import { useEffect, useState } from "react";
import LoginScreen from "./src/screens/Authentication/LoginScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "./src/navigation/AppNavigation";
import DrawerNavigation from "./src/navigation/DrawerNavigation";

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 4000);
  });
  return(
    <>
    <AppNavigation />
    {/* {isShowSplash ? <SplashScreen /> : <HomeScreen />} */}
    </>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Use the entire screen
    justifyContent: "center", // Center the content vertically
    alignItems: "center", // Center the content horizontally
  },
});
