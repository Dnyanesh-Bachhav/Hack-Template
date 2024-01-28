import { AlignJustify, Plus } from "@tamagui/lucide-icons";
import Header from "../components/global/Header";
// import { Button } from "tamagui";
import { APP, COLORS } from "../components/constants";
import { useContext, useEffect, useRef, useState } from "react";
import { Image, Modal, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../contexts/AuthProviderContext";
import NetInfo from "@react-native-community/netinfo";
import app from "../firebaseConfig";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import Button from "../components/global/Button";
import Loader from "../components/global/Loader";
import { SizableText } from "tamagui";
import FileUpload from "../components/global/FileUpload";
import Box from "../components/global/Box";

// const { View, Text, StyleSheet } from "react-native";

function HomeScreen({ navigation }) {
  const [connected, setConnected] = useState(true);
  const { user, firestoreUser, setFirestoreUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const animationRef = useRef(null);

  const checkConnection = async () => {
    const data = await NetInfo.fetch();

    setConnected(data.isConnected);
  };

  const ModalPopUp = ({ visible, children }) => {
    return (
      <Modal
        transparent
        visible={loading}
        style={{ width: "100%", height: "100%" }}
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalData}>{children}</View>
        </View>
      </Modal>
    );
  };

  async function getUserdataFirestore() {
    setLoading(true);
    const db = getFirestore(app);
    const collection_ref = collection(db, "users");
    const userdata = await getDoc(doc(collection_ref, user.uid));
    console.log(JSON.stringify(userdata.data()));
    setFirestoreUser(userdata.data());
    setLoading(false);
  }
  function handleIconClick() {
    navigation.openDrawer();
  }
  function handleClick() {
    console.log("Button Pressed...!!!");
  }
  useEffect(() => {
    checkConnection();
    getUserdataFirestore();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        headerText={APP.name}
        icon={<AlignJustify size={"$2"} color={COLORS.white} />}
        onPressFunction={handleIconClick}
      />
      <View style={styles.contentContainer}>
        {/* <Text>Hello World...!!!</Text> */}
        <Box>
          <SizableText size={"$8"} fontWeight={"bold"}>
            Guidelines
          </SizableText>
          <SizableText size={"$6"} style={{ marginTop: 10 }}>
            Steps to use a bot
          </SizableText>
          <SizableText>
            1. Upload a PDF document.(defaults to RBI guidelines)
          </SizableText>

          <SizableText>2. Visit a chatbot screen for any queries.</SizableText>
        </Box>
        <FileUpload />
        {/* <Loader /> */}
        {/* <Button icon={Plus}>Hello world</Button> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    paddingHorizontal: 10,
  },
});
export default HomeScreen;
