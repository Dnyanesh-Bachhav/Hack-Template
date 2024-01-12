import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      console.log("HI in a screen...")
      navigation.navigate('Parent');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }} >Splash</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        // borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Splash;