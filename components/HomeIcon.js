import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const HomeIcon = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: props.color }]}>
      <Ionicons name={props.iconName} size={35} color="white" />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 165,
    height: 160,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    borderWidth: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
});
