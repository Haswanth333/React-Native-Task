import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { render } from "react-dom";
import { Text, View, Image, Dimensions, Button } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Icon from "react-native-vector-icons/Ionicons";

const slides = [
  {
    key: "one",
    title: "Scan anything in HD, wherever you are...",
    text: "Simply launch the AirScan app and scan any document, papers or real world photographs in seconds. ",
    image: require("./assets/images/Discover new technology 1.png"),
  },
  {
    key: "two",
    title: "Navigate work documents like a Pro",
    text: "Scan and organize your work documents in structured folders. Scan single or multiple documents in one swift go. Merge scans into PDFs, reorder pages and share them on the fly. ",
    image: require("./assets/images/Group 972.png"),
  },
  {
    key: "three",
    title: "Less time scanning homework = more time for fun",
    text: "Scanning of homework and assignments are a breeze with AirScan. Capture scans, generate PDFs and push them to any app installed on your phone. Its that easy! ",
    image: require("./assets/images/Father and Son 1.png"),
  },
  {
    key: "four",
    title: "Covert Pictures to Text with our next generation offline OCR",
    text: "Leverage our cutting edge machine learning OCR to convert documents to text in seconds with accurate results. Share OCR scans as Doc files or PDFs in seconds",
    image: require("./assets/images/Hero Image.png"),
    image2: require("./assets/images/Vector.png"),
  },
  {
    key: "five",
    image: require("./assets/images/Library.png"),
  },
];

export default class App extends Component {
  state = { showHomePage: false };
  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        {/* {item.key === "five" ? (
          <Image source={item.image} style={{ height: 100 }} />
        ) : null} */}
        <Image
          source={item.image}
          style={{
            resizeMode: "contain",
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").width,
            // marginHorizontal: 40,
            width: "70%",

            alignSelf: "center",
          }}
        />
        <Text
          style={{
            // alignSelf: "center",
            fontSize: 20,
            fontWeight: "bold",
            // paddingTop: 10,
            paddingHorizontal: 30,
            fontFamily: "Verdana",
            textAlign: "center",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            // alignSelf: "center",
            fontSize: 13,
            paddingTop: 30,
            paddingHorizontal: 20,
            marginBottom: 20,
            fontFamily: "Roboto",
            textAlign: "center",
          }}
        >
          {item.text}
        </Text>
        {item.key === "four" ? (
          <Image
            source={item.button}
            style={{
              width: 40,
              height: 40,
              backgroundColor: "rgba(0, 0, 0, .5)",
              borderRadius: 20,
              // justifyContent: "center",
              alignItems: "left",
              marginLeft: "80%",
              marginTop: 0,
              marginBottom: 20,
            }}
          />
        ) : // <Icon
        //   source={item.button}

        // />
        // <Next>{item.button}</Next>
        null}
      </View>
    );
  };
  render() {
    return <AppIntroSlider renderItem={this.renderItem} data={slides} />;
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
