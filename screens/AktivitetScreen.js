import React from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  FlatList,
  Text,
  Pressable,
} from "react-native";

import { Header2 } from "../components/Header";
import { LinkBar } from "../components/LinkBar";

const DATA = [
  {
    image: require("../assets/aktiviteter/Legeplads.jpeg"),
    title: "Legeplads",
    shortDesc: "Danmarks længste legeplads",
  },
  {
    image: require("../assets/aktiviteter/Padel.jpeg"),
    title: "Padel",
    shortDesc: "To padeltennisbaner til hele familien",
  },
  {
    image: require("../assets/aktiviteter/Storkesøen.jpeg"),
    title: "Storkesøen",
    shortDesc: "Put-and-take-sø",
  },
  {
    image: require("../assets/aktiviteter/Svømmehal.jpeg"),
    title: "Ribe Svømmebad",
    shortDesc: "Ribes egen svømmehal",
  },
  {
    image: require("../assets/aktiviteter/ØstersSafari.jpeg"),
    title: "Østerssafari",
    shortDesc: "Tag på østersafari uden for sommermånederne",
  },
];

export default function AktivitetScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} />
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
