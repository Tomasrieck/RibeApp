import React from "react";
import { StyleSheet, StatusBar, View, FlatList, Pressable } from "react-native";

import { Header2 } from "../components/Header";
import { LinkBar } from "../components/LinkBar";

const DATA = [
  {
    image: require("../assets/overnatning/Dagmar.jpeg"),
    title: "Dagmar",
    shortDesc: "Danmarks ældste hotel",
  },
  {
    image: require("../assets/overnatning/Byferie.jpeg"),
    title: "Byferie",
    shortDesc: "Ribe Byferie Resort",
  },
  {
    image: require("../assets/overnatning/Danhostel.jpeg"),
    title: "Danhostel",
    shortDesc: "Ribes vandrehjem",
  },
  {
    image: require("../assets/overnatning/Storkesøen.jpeg"),
    title: "Storkesøen",
    shortDesc: "Bo i hytter i naturskønne omgivelser",
  },
  {
    image: require("../assets/overnatning/Købmandsgaarden.jpeg"),
    title: "Købmandsgården",
    shortDesc: "Bed & Breakfast",
  },
  {
    image: require("../assets/overnatning/WeisStue.jpeg"),
    title: "WeisStue",
    shortDesc: "Bo i gamle omgivelser",
  },
  {
    image: require("../assets/overnatning/HotelRibe.jpeg"),
    title: "HotelRibe",
    shortDesc: "Hotel og restaurant",
  },
  {
    image: require("../assets/overnatning/Bjerrumgaard.jpeg"),
    title: "Bjerrumgård",
    shortDesc: "Smukt Bed & Breakfast",
  },
  {
    image: require("../assets/overnatning/Kammerslusen.jpeg"),
    title: "Kammerslusen",
    shortDesc: "Bo ude ved Vadehavet",
  },
  {
    image: require("../assets/overnatning/GamleArrest.jpeg"),
    title: "GamleArrest",
    shortDesc: "Smuk restaurant og overnatning",
  },
];

export default function OvernatningScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar translucent={false} />
      <Header2 {...props} />
      <FlatList
        data={DATA}
        renderItem={({ item, index }) => (
          <Pressable
            key={index.toString()}
            onPress={() =>
              props.navigation.navigate("AboutScreen", {
                image: item.image,
                title: item.title,
                shortDesc: item.shortDesc,
                longDesc: item.longDesc,
                address: item.address,
              })
            }
          >
            <LinkBar
              image={item.image}
              title={item.title}
              shortDesc={item.shortDesc}
            />
          </Pressable>
        )}
        style={styles.content}
      />
    </View>
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
  },
});
