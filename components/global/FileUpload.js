import { Image, View } from "react-native";
import { SizableText } from "tamagui";
import Button from "./Button";
import { useRef, useState } from "react";
import * as DocumentPicker from 'expo-document-picker';
import { COLORS } from "../constants";

function FileUpload(){
    
  const doc1 = useRef(null);
  const [pickedDocument, setPickedDocument] = useState(null);

    const handlePicker = async () => {
        console.log("Funciton Called")
        try {
          const result = await DocumentPicker.getDocumentAsync({
            type: 'application/pdf', // Specify the MIME type for PDF files
          });
          console.log(result.assets[0]);
          doc1.current = result?.assets[0]?.name;
          setPickedDocument(result?.assets[0]?.name);
    
          if (result.type === 'success') {
            console.log("Picked...!!!");
            // doc.current = result.assets[0].name;
            // console.log(doc.current);
          } else {
            setPickedDocument(null);
          }
        } catch (error) {
          console.error('Error picking document:', error);
        }
      };
      
    return(
        <View>
            {
           doc1.current==null ?
           <Image
           source={require("../../assets/plus.png")}
           style={{
             width: 100,
          height: 100,
          alignSelf: 'center',
          marginTop: 27 
        }}
        />
        : <Image
        source={require("../../assets/done.png")}
        style={{
          width: 100,
       height: 100,
       alignSelf: 'center',
       marginTop: 27 
     }}
     />
            }
        {/* <Ask */}
        <SizableText size={"$5"} style={{ textAlign: 'center', marginTop: 27 }} >Selected PDF: { doc1.current!=null  ? doc1.current : 'None'}</SizableText>
      
        <Button btnText={"Select a document"} backColor={COLORS.primary} textColor={COLORS.white} onPressFunction={ handlePicker } />
        
        </View>
    );
}
export default FileUpload;