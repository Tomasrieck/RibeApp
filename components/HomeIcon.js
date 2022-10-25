import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const HomeIcon = (props) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: props.color }]}
      onPress={() => props.navigation.navigate(props.to)}
    >
      <Ionicons name={props.iconName} size={35} color="white" />
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "40%",
    height: "60%",
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
