import "react-native-gesture-handler";
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { COLORS } from "./components/constants";
import { TamaguiProvider } from "tamagui";
import { useFonts } from "expo-font";

import config from "./tamagui.config";
import { createTamagui } from "@tamagui/core";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./Navigation/AppNavigator";
const tamaguiConfig = createTamagui(config);

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  return (
    <View style={styles.container}>
      <TamaguiProvider config={tamaguiConfig}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </TamaguiProvider>
      <StatusBar style="auto" backgroundColor={"#632791"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
