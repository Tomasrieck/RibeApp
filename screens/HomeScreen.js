import React from "react";
import { StyleSheet, StatusBar, View, ImageBackground } from "react-native";

import { Header1 } from "../components/Header";
import { HomeIcon } from "../components/HomeIcon";

export default function HomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      style={styles.container}
    >
      <StatusBar translucent={true} />
      <Header1 />
      <View style={styles.content}>
        <View style={styles.imageCover}>
          <View style={styles.homeIconRow}>
            <HomeIcon
              iconName="restaurant-outline"
              color="rgb(43,150,246)"
              title="Spisesteder"
              to="RestaurantScreen"
              {...props}
            />
            <HomeIcon
              iconName="tennisball-outline"
              color="rgb(202,61,61)"
              title="Aktiviteter"
              to="AktivitetScreen"
              {...props}
            />
          </View>
          <View style={styles.homeIconRow}>
            <HomeIcon
              iconName="image-outline"
              color="rgb(43,150,246)"
              title="Kultur"
              to="KulturScreen"
              {...props}
            />
            <HomeIcon
              iconName="bed-outline"
              color="rgb(202,61,61)"
              title="Overnatning"
              to="OvernatningScreen"
              {...props}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  imageCover: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
    zIndex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  homeIconRow: {
    flex: 0.35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
