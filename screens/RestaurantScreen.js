import React from "react";
import { StyleSheet, StatusBar, View, FlatList, Pressable } from "react-native";

import { Header2 } from "../components/Header";
import { LinkBar } from "../components/LinkBar";

const DATA = [
  {
    image: require("../assets/restauranter/Pinnochio.jpeg"),
    title: "Pinnochio",
    shortDesc: "Italiensk restaurant",
    longDesc: ``,
    address: "Overdammen 7, 6760 Ribe",
  },
  {
    image: require("../assets/restauranter/Kammerslusen.jpeg"),
    title: "Kammerslusen",
    shortDesc: "Restaurant og overnatning",
    longDesc: `Kammerslusen er stedet, hvor lystbådene bliver sluset fra Ribe Å ud i Vadehavet. Kammerslusen er stedet, hvor du kan få en rigtig god nats søvn under ”himlens store hvælv”, som kunstneren Carl Henning Pedersen siger.
    
Placeringen er unik midt i et stykke enestående idyl i læ af Ribe-diget, der på solskinsdage ånder idyl, mens du her på en stormende efterårsdag virkeligt fornemmer naturens enorme kræfter.
    
Kammerslusen er en gammel institution i en moderne bygning. Kammerslusen rummer i dag ud over restaurant og selskabslokaler seks store, lyse og moderne værelser samt en stor og en lille suite på førstesal.
    
Her kan du med morgenkaffen indenfor rækkevidde nyde solopgangen, eller du kan med en forfriskning i hånden nyde aftensolen, når den går ned bag hav og dige for at sige dagen godnat.`,
    address: "Bjerrumvej 30, 6760 Ribe",
  },
  {
    image: require("../assets/restauranter/Quedens.jpeg"),
    title: "Quedens",
    shortDesc: "Café og restaurant",
    longDesc: `Netop der, hvor by og hav mødes, hvor Ribe Å fra sit løb fra Vadehavet ind i landet går over til at blive Ribes havn, Skibbroen, ligger Café Quedens.
Siden 1200-tallet har der været liv på stedet, og caféen har til huse i bygningen fra 1582, som købmand Johannes Harbo Quedens købte i 1834. Han overtog en eksisterende købmandsforretning.
    
Bygningskomplekset tilhører i dag Sydvestjyske Museer, og siden 1965 har der været først butik og siden en kombination af butik og café, hvor der fortsat er mulighed for at gøre en god handel.
    
Her byder Lise Frederiksen velkommen i en charmerende café, hvor der serveres alt fra kaffe og kage via sandwichs og burgere til spændende frokost- og middagsretter alt efter tid på dagen, årstiden og kundens behov. Om sommeren kan køkkenets lækre frembringelser nydes både på fortovscaféen, i den unikke gård eller i den tilstødende, charmerende rosenhave.`,
    address: "Overdammen 10, 6760 Ribe",
  },
  {
    image: require("../assets/restauranter/WeisStue.jpeg"),
    title: "Weis Stue",
    shortDesc: "Restaurant og overnatning",
    longDesc: ``,
    address: "Overdammen 7, 6760 Ribe",
  },
  {
    image: require("../assets/restauranter/Sælhunden.jpeg"),
    title: "Sælhunden",
    shortDesc: "Fiskerestaurant",
    longDesc: ``,
    address: "Overdammen 7, 6760 Ribe",
  },
  {
    image: require("../assets/restauranter/Backhaus.jpeg"),
    title: "Backhaus",
    shortDesc: "Traditionel dansk restaurant",
    longDesc: ``,
    address: "Overdammen 7, 6760 Ribe",
  },
  {
    image: require("../assets/restauranter/HotelRibe.jpeg"),
    title: "Hotel Ribe",
    shortDesc: "Restaurant og overnatning",
    longDesc: ``,
    address: "Overdammen 7, 6760 Ribe",
  },
  {
    image: require("../assets/restauranter/Dagmar.jpeg"),
    title: "Dagmar",
    shortDesc: "Restaurant og overnatning",
    longDesc: ``,
    address: "Overdammen 7, 6760 Ribe",
  },
  {
    image: require("../assets/restauranter/GamleArrest.jpeg"),
    title: "Gamle Arrest",
    shortDesc: "Restaurant og overnatning",
    longDesc: ``,
    address: "Overdammen 7, 6760 Ribe",
  },
  {
    image: require("../assets/restauranter/MamaMia.jpeg"),
    title: "Mama Mia",
    shortDesc: "Pizzaria",
    longDesc: ``,
    address: "Overdammen 7, 6760 Ribe",
  },
];

export default function RestaurantScreen(props) {
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
