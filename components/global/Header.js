import React from 'react'; 
import {View,Text,Image,StyleSheet,StatusBar,TouchableOpacity, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { AlignJustify } from '@tamagui/lucide-icons';
function Header({ headerText, icon, onPressFunction }){
  return(
    <View style={styles.container}>
      <View style={{justifyContent: 'center'}}>
        <Pressable onPress={()=>{
            console.log("Icon pressed...");
            onPressFunction();
        //   navigation.openDrawer();
        }} >
          { icon }
          </Pressable>
      </View>
      <Text style={styles.textStyle}>{ headerText }</Text>

    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  textStyle:{
    color: "#fff",
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 10,
    paddingVertical: 5
  },
  imgStyle:{
    width: 24,
    height: 24,
    resizeMode: 'contain',
    justifyContent:'center',
    alignContent: 'center'
  },

  iconStyle:{
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: 'auto'
  }
})
export default Header;
