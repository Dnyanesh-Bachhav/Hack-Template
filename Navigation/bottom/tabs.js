import React from "react";
import {View,Text,StyleSheet,Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from "../../components/constants";
import HomeStack from "../../Stacks/HomeStack";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import ChatStack from "../../Stacks/ChatStack";


const Tab = createBottomTabNavigator();
function Tabs(){
    const animation = useSharedValue(0.7);
    const animatedStyle = useAnimatedStyle(()=>{
        return { transform: [{scale:animation.value}]};
    });
    return(
        <Tab.Navigator
        screenOptions={{
            "tabBarShowLabel": false,
            "tabBarStyle": {
                // flex: 1,
                // display: "flex",
                // borderWidth: 1,
                // paddingHorizontal: 10,
                height: "7%",
                width: "96%",
                alignSelf: "center",
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 16,
                marginBottom: 10,
                elevation: 4,
                // paddingVertical: 10,
                paddingHorizontal: 25
            }
          }}
        >
            <Tab.Screen name="HomeScreen" component={HomeStack} options={{
                headerShown: false,
                tabBarIcon: ({focused})=>(
                    <View style={styles.tabOption }>
                        <Image source={require("../../assets/Home.png")} style={{
                            tintColor: focused ? COLORS.primary : COLORS.black,
                            ...styles.imgStyle}}/>
                        {
                            focused &&
                            <Text numberOfLines={1} style={{color: focused ? COLORS.primary : COLORS.black,}} >Home</Text>
                        }
                    </View>
                )
            }} />
            <Tab.Screen name="Chatbot" component={ChatStack} options={{
                headerShown: false,
                tabBarIcon: ({focused})=>(
                    <View style={styles.tabOption }>
                        <Image source={require("../../assets/chatbot.png")} style={{
                            tintColor: focused ? COLORS.primary : COLORS.black,
                            ...styles.imgStyle}}/>
                        {
                            focused &&
                            <Text numberOfLines={1} style={{color: focused ? COLORS.primary : COLORS.black,}} >Chat</Text>
                        }
                    </View>
                )
            }} />            
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    imgStyle:{
        width: 22,
        height: 22,
        marginRight: 5
    },
    tabOption:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    focusedIconStyle:{
        flexDirection: 'row',
        width : '100%',
        paddingVertical: 5,
        paddingHorizontal: 7,
        borderRadius: 10,
        // backgroundColor: COLORS.primaryFaint,
    }
})
export default Tabs;