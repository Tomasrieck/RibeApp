import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export const LinkBar = ({ image, title, shortDesc }) => (
  <View>
    <Image source={image} style={styles.assetImage} />
    <View style={styles.assetImageText}>
      <Text style={styles.assetText1}>{title},</Text>
      <Text style={styles.assetText2}>{shortDesc}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  assetImage: {
    height: 140,
    width: "100%",
    marginBottom: 5,
  },
  assetImageText: {
    top: "35%",
    right: "45%",
    bottom: "5%",
    left: 0,
    position: "absolute",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 15,
    marginBottom: 5,
  },
  assetText1: {
    fontSize: 20,
    fontWeight: "400",
    color: "white",
  },
  assetText2: {
    fontSize: 13,
    fontWeight: "400",
    color: "white",
  },
});
