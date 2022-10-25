import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const Header1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ribe</Text>
      <Image
        style={{ height: 64, width: 51, marginRight: 25 }}
        source={require("../assets/headerIcon.png")}
      />
    </SafeAreaView>
  );
};

export const Header2 = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <AntDesign
          name="left"
          size={33}
          color="rgb(43,150,246)"
          style={{ marginLeft: 17 }}
        />
      </TouchableOpacity>
      <Image
        style={{ height: 64, width: 51, marginRight: 25 }}
        source={require("../assets/headerIcon.png")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.12,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: "Papyrus",
    fontSize: 60,
    marginLeft: 25,
  },
});
