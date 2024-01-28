import { View } from "react-native";
import { COLORS } from "../constants";

function Box({ children }) {
  return (
    <View
      style={{
        backgroundColor: COLORS.primaryFaint,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 20,
        paddingVertical: 10,
        elevation: 2,
      }}
    >
      {children}
    </View>
  );
}
export default Box;