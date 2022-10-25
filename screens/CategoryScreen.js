import React from "react";
import { StyleSheet, StatusBar, View, FlatList, Pressable } from "react-native";

import { Header2 } from "../components/Header";
import { LinkBar } from "../components/LinkBar";

import { SPISESTEDER } from "../Data/Spisesteder";
import { AKTIVITETER } from "../Data/Aktiviteter";
import { KULTUR } from "../Data/Kultur";
import { OVERNATNING } from "../Data/Overnatning";

export default function RestaurantScreen(props) {
  if (props.route.params.category == "Spisesteder") {
    var DATA = SPISESTEDER;
  } else if (props.route.params.category == "Aktiviteter") {
    var DATA = AKTIVITETER;
  } else if (props.route.params.category == "Kultur") {
    var DATA = KULTUR;
  } else {
    var DATA = OVERNATNING;
  }

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
