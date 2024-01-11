import Header from "../components/global/Header";

const { View, Text, StyleSheet } = require("react-native");

function HomeScreen(){
    return(
        <View style={styles.container}>
            <Header/>
            <View style={styles.contentContainer}>
                <Text>Hello World...!!!</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    contentContainer:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default HomeScreen;