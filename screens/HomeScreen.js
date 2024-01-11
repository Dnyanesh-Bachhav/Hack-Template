import { AlignJustify, Plus } from "@tamagui/lucide-icons";
import Header from "../components/global/Header";
import { Button } from "tamagui";
import { COLORS } from "../components/constants";
import { useEffect } from "react";

const { View, Text, StyleSheet } = require("react-native");

function HomeScreen() {
  useEffect(()=>{
    console.log("HomeScreen...");
  },[]);
  return (
    <View style={styles.container}>
      <Header headerText={"CoinStack"} icon={ <AlignJustify size={"$2"} color={COLORS.white} /> } />
      <View style={styles.contentContainer}>
        <Text>Hello World...!!!</Text>
        <Button icon={Plus}>Hello world</Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default HomeScreen;
