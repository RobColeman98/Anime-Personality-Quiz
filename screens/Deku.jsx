import * as React from "react";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export default class Deku extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../src/Deku.png")} />
        <Text style={styles.Deku}>
          Congraulations, you're Izuku "Deku" Midoriya from My Hero Academia!
        </Text>
        <Text></Text>

        <Text style={styles.description}>
          Growing up you may not have been the biggest, strongest, fastest, or
          most talented, but you study those that came before you and analazyed
          everything that made them great while putting your own spin on things.{" "}
        </Text>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },

  Deku: {
    fontWeight: "bold",
    fontSize: 18,
    
  },

  description: {
    margin: 5,
    textAlign: "center",
      fontSize: 15,
    
  
      
  }
});
