import react from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
const HomeScreenStack = createNativeStackNavigator();



function HomeStack(){
    return(
        <HomeScreenStack.Navigator>
            <HomeScreenStack.Screen name="Home" component={HomeScreen}
            options={{
                headerShown: false,
            }}
            />
        </HomeScreenStack.Navigator>
    );
}

export default HomeStack;