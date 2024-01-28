import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatbotScreen from "../screens/ChatbotScreen";


const Stack = createNativeStackNavigator();
function ChatStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Chatbot" component={ChatbotScreen} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}
export default ChatStack;