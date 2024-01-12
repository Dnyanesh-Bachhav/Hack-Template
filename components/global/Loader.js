import { StyleSheet, View } from "react-native";
import { Spinner } from "tamagui";
import { YStack } from "tamagui";

function Loader() {
  return (
    <View style={styles.container}>
      <YStack padding="$3" space="$4" alignItems="center">
        <Spinner size="large" color="$purple10Dark" />
      </YStack>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
export default Loader;
