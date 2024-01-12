import { StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants";
import { SizableText } from "tamagui";

function Button({ btnText, backColor, textColor, onPressFunction  }){
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={ onPressFunction } style={{...styles.btnStyle, backgroundColor: backColor }}>
                <SizableText size={"$5"} fontWeight={"600"} style={{ color: textColor, textAlign: 'center' }} >{ btnText }</SizableText>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width: '100%'
    },
    btnStyle:{
        width: '100%',
        // backgroundColor: COLORS.primary,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginTop: 15,
        elevation: 5
    },

})
export default Button;