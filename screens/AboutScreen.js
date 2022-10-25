import React, { useRef } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  ImageBackground,
  Linking,
  TouchableOpacity,
  Platform,
  Animated,
} from "react-native";

import { Header2 } from "../components/Header";

export default function AboutScreen(props) {
  const url = Platform.select({
    ios: `maps:0,0?q=${props.route.params.address}`,
    android: `geo:0,0?q=${props.route.params.address}`,
  });

  const fadeAnim = useRef(new Animated.Value(0)).current;
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  return (
    <View style={styles.container}>
      <StatusBar translucent={false} />
      <Header2 {...props} />
      <ImageBackground
        source={props.route.params.image}
        resizeMode="cover"
        style={styles.content}
      >
        <View style={styles.imageCover}>
          <Animated.View style={[styles.infoField, { opacity: fadeAnim }]}>
            <Text style={styles.title}>{props.route.params.title},</Text>
            <Text style={styles.shortDesc}>{props.route.params.shortDesc}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(url)}>
              <Text style={styles.address}>Vis på kort</Text>
            </TouchableOpacity>
            <Text style={styles.longDesc}>{props.route.params.longDesc}</Text>
          </Animated.View>
        </View>
      </ImageBackground>
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
  imageCover: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  infoField: {
    flex: 0.9,
    width: "90%",
  },
  title: {
    fontSize: 36,
    fontWeight: "400",
    color: "white",
    marginBottom: 4,
  },
  shortDesc: {
    fontSize: 18,
    fontWeight: "400",
    color: "white",
    marginBottom: 4,
  },
  address: {
    fontSize: 18,
    fontWeight: "400",
    color: "rgb(43,150,246)",
    marginBottom: 17,
  },
  longDesc: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
  },
  map: {
    height: 280,
    width: 300,
  },
});
