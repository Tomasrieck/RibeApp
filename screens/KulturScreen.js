import React from "react";
import { StyleSheet, StatusBar, View, FlatList, Pressable } from "react-native";

import { Header2 } from "../components/Header";
import { LinkBar } from "../components/LinkBar";

const DATA = [
  {
    image: require("../assets/kultur/Domkirke.jpeg"),
    title: "Domkirke",
    shortDesc: "Danmarks længste legeplads",
  },
  {
    image: require("../assets/kultur/HEX.jpeg"),
    title: "HEX",
    shortDesc: "To padeltennisbaner til hele familien",
  },
  {
    image: require("../assets/kultur/VikingeCenter.jpeg"),
    title: "VikingeCenter",
    shortDesc: "Put-and-take-sø",
  },
  {
    image: require("../assets/kultur/Kunstmuseum.jpeg"),
    title: "Ribe Kunstmuseum",
    shortDesc: "Ribes egen svømmehal",
  },
  {
    image: require("../assets/kultur/CatharinæKirke.jpeg"),
    title: "Catharinæ Kirke",
    shortDesc: "Tag på østersafari uden for sommermånederne",
  },
  {
    image: require("../assets/kultur/JacobARiis.jpeg"),
    title: "Jacob A. Riis",
    shortDesc: "Put-and-take-sø",
  },
  {
    image: require("../assets/kultur/Vægter.jpeg"),
    title: "Vægtergang",
    shortDesc: "Put-and-take-sø",
  },
  {
    image: require("../assets/kultur/Vikingemuseum.jpeg"),
    title: "Vikingemuseum",
    shortDesc: "Put-and-take-sø",
  },
  {
    image: require("../assets/kultur/Vadehavscenter.jpeg"),
    title: "Vadehavscenter",
    shortDesc: "Put-and-take-sø",
  },
];

export default function KulturScreen(props) {
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
