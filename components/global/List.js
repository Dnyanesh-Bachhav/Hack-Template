import { AnimatedFlashList, FlashList } from "@shopify/flash-list";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SizableText } from "tamagui";
import { COLORS, LIST_DATA } from "../constants";
import { memo } from "react";

function List(){
    return(
        <View style={styles.container}>
            <SizableText>List</SizableText>
            <AnimatedFlashList
            data={LIST_DATA}
            // horizontal={true}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index})=>(
                <Item item={item} />
            )}
            estimatedItemSize={43}
            
            />
        </View>
    );
}
const Item = ({item})=>{
    function handleClick(item){
        console.log("Item: "+item.name)
    }
    return(
        <TouchableOpacity onPress={()=>{
            handleClick(item);
        }}>
            <View style={styles.cellStyle}>
                <SizableText>{item.id}-{item.name}</SizableText>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    cellStyle:{
        width: '100%',
        backgroundColor: COLORS.primaryFaint,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 10

    }
})
export default List;