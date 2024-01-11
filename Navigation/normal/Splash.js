import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    console.log("Splash...");
    setTimeout(() => {
      // navigation.navigate('Parent');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Splash</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Splash;