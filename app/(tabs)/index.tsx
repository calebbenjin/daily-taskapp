import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello World App Salvi.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 8,
  },
});
