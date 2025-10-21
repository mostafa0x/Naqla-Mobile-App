import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Link href={"/GameScreen"}>Game button</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
