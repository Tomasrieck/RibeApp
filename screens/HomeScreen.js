import React from "react";
import { StyleSheet, StatusBar, View, TouchableOpacity } from "react-native";

import { Header1 } from "../components/Header";
import { HomeIcon } from "../components/HomeIcon";

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar translucent={false} />
      <Header1 />
      <View style={styles.content}>
        <View style={styles.homeIconRow}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("CategoryScreen", {
                category: "Spisesteder",
              })
            }
          >
            <HomeIcon
              iconName="restaurant-outline"
              color="rgb(43,150,246)"
              title="Spisesteder"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("CategoryScreen", {
                category: "Kultur",
              })
            }
          >
            <HomeIcon
              iconName="image-outline"
              color="rgb(202,61,61)"
              title="Kultur"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.homeIconRow}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("CategoryScreen", {
                category: "Aktiviteter",
              })
            }
          >
            <HomeIcon
              iconName="tennisball-outline"
              color="rgb(43,150,246)"
              title="Aktiviteter"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("CategoryScreen", {
                category: "Overnatning",
              })
            }
          >
            <HomeIcon
              iconName="bed-outline"
              color="rgb(202,61,61)"
              title="Overnatning"
            />
          </TouchableOpacity>
        </View>
      </View>
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
    justifyContent: "center",
  },
  homeIconRow: {
    flex: 0.35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
