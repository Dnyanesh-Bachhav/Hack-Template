import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LottieView from "lottie-react-native";
import { COLORS } from "../components/constants";
import { useContext, useRef } from "react";
import Onboarding from "react-native-onboarding-swiper";
import { AuthContext } from "../contexts/AuthProviderContext";

function OnboardingScreen({ navigation }) {
  const animationRef = useRef(null);
  const { user, setUser } = useContext(AuthContext);
  function handleDone(){
    setUser(null);
    navigation.navigate("LoginScreen");

  }
  return (
    <View style={styles.container}>
      <Onboarding
      onDone={handleDone}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
                <View style={{ width: '100%', height: '60%', justifyContent: 'center', alignItems: 'center' }}>
              <LottieView
                ref={animationRef}
                style={{
                  width: "100%",
                  height: "100%",
                  alignSelf: "center",
                  color: COLORS.primary,
                }}
                autoPlay
                loop
                source={require("../assets/Cryptocurrency.json")}
                />
                </View>
            ),
            title: "Welcome to Help Desk AI",
            subtitle: "Your Smart Banking Assistant powered by RBI guidelines.",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
                <View style={{ width: '100%', height: '60%', justifyContent: 'center', alignItems: 'center' }}>
              <LottieView
                ref={animationRef}
                style={{
                  width: "100%",
                  height: "100%",
                  alignSelf: "center",
                  color: COLORS.primary,
                }}
                autoPlay
                loop
                source={require("../assets/Learning.json")}
              />
              </View>
            ),
            title: "Questions about RBI guidelines?",
            subtitle: "Ask anytime, we're here to help!",
          },
          {
            backgroundColor: '#a78bfa',
            image:   <View style={{ width: '100%', height: '60%', justifyContent: 'center', alignItems: 'center' }}>
            <LottieView
            ref={animationRef}
            style={{
                    width: '100%',
                    height: '100%',
                    alignSelf: 'center',
                    // resizeMode: 'contain'
                    // color: COLORS.primary,
            }}
            autoPlay
            loop
            source={require('../assets/Security.json')}
        /></View>,
            title: 'Seamless Banking Guidance',
            subtitle: 'Seamless Guidance through Banking Guidelines',
            },
        ]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default OnboardingScreen;
