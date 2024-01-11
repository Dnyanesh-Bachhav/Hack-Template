import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../components/constants";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import user1 from "../../assets/user.png";
import { useContext, useEffect, useState } from "react";
import { Paragraph, SizableText } from "tamagui";
import { Accordion } from "tamagui";
import { Square } from "tamagui";
import { ChevronDown } from "@tamagui/lucide-icons";
// import {
//   Collapse,
//   CollapseHeader,
//   CollapseBody,
// } from "accordion-collapse-react-native";

const Drawer = createDrawerNavigator();

function CustomDrawer(props) {
  const [open,setOpen] = useState(false);
  useEffect(() => {
    // console.log("User on custome drawer:" + JSON.stringify(user));
  }, []);
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: COLORS.secondary }}
      >
        <View style={styles.userInfo}>
          <View
            style={{
              backgroundColor: COLORS.white,
              width: 100,
              height: 100,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
            }}
          >
            <Image
              source={user1}
              style={{ width: 80, height: 80, borderRadius: 40 }}
            />
          </View>
          <SizableText
            size={"$7"}
            fontWeight={"bold"}
            style={{ marginLeft: 0 }}
          >
            Dnyanesh Bachhav
          </SizableText>
        </View>

        <View style={styles.listContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      {/* <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => {
            // handleShare();
            console.log("Share Clicked...!!!");
          }}
        >
          <View style={styles.bottomListItem}>
            <Entypo name="share" size={24} color="black" />
            <Text style={{ marginLeft: 5 }}>Tell a friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // signOut();
            console.log("logout");
          }}
        >
          <View style={styles.bottomListItem}>
            <MaterialIcons name="logout" size={24} color="black" />
            <Text style={{ marginLeft: 5 }}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  userInfo: {
    padding: 10,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    marginBottom: 5,
  },
  listContainer: {
    backgroundColor: COLORS.white,
  },
  bottomContainer: {
    borderTopWidth: 1,
    borderTopColor: COLORS.gray,
    padding: 16,
  },
  bottomListItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
});
export default CustomDrawer;
