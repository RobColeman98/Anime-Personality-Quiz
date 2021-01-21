import * as React from "react";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export default class Naruto extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../src/Naruto.png")} />
        <Text style={styles.Naruto}>
          Congraulations, you're Naruto Uzamaki from Naruto!
        </Text>
        
        <Text></Text>

        <Text style={styles.description}>
          On the surface you might seem a bit hard headed and even a
          knucklehead, but deep down you have a strong will that burns like a
          wildfire and you will stop at nothing to acheive your goals.
        </Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "chocolate",
    alignItems: "center",
    justifyContent: "center",
  },

  Naruto: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 10,
    color:"black"
    
  },

  description: {
    margin: 5, 
    color: "black",
    fontSize: 17,
    textAlign:"center"
  }
});
