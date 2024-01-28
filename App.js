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
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./Navigation/normal/Splash";
import Parent from "./Navigation/normal/Parent";
import { AuthProvider } from "./contexts/AuthProviderContext";
import { PaperProvider } from "react-native-paper";
const tamaguiConfig = createTamagui(config);

const Stack = createStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  return (
    <View style={styles.container}>
       <TamaguiProvider config={config}>
        <PaperProvider>
          <AuthProvider>
            <NavigationContainer>
              <AppNavigator/>
            </NavigationContainer>
          </AuthProvider>
        </PaperProvider>
      </TamaguiProvider>
      <StatusBar style="auto" backgroundColor={"#632791"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#fff",
    // maringTop: 10
    // marginTop: StatusBar.currentHeight
    // alignItems: "center",
    // justifyContent: "center",
  },
});
