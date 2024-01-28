import { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { COLORS } from "../components/constants";
import Button from "../components/global/Button";

function ProfileScreen(){
    const [ text, setText ] = useState(null);
    return(
        <View style={{ flex: 1, marginHorizontal: 10, backgroundColor: COLORS.white }} >
            <Text>Hello Profile Screen...</Text>
            {/* <TextInput
            mode="flat"
            placeholder="dnyaneshbachhav2002@gmail.com"
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    /> */}
           <TextInput
            mode="outlined"
            placeholder="dnyaneshbachhav2002@gmail.com"
            label="Name"
            value={text}
            onChangeText={text => setText(text)}
            />
           <TextInput
            mode="outlined"
            placeholder="dnyaneshbachhav2002@gmail.com"
            label="Email"
            value={text}
            onChangeText={text => setText(text)}
            />
            
            <TextInput
            mode="outlined"
            placeholder="dnyaneshbachhav2002@gmail.com"
            label="Phone"
            value={text}
            onChangeText={text => setText(text)}
            />
            <TextInput
            mode="outlined"
            placeholder="dnyaneshbachhav2002@gmail.com"
            label="Password"
            value={text}
            onChangeText={text => setText(text)}
            />
            <Button btnText={"Submit"} backColor={COLORS.primary} textColor={COLORS.white} onPressFunction={ ()=>{
                console.log("Clicked...")
            } }  />
        </View>
    );
}
export default ProfileScreen;