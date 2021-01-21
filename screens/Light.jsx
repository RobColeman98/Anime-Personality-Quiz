import * as React from "react";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export default class Light extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../src/Light.png")}
          style={{ width: 400, height: 500 }}
        />
        <Text style={styles.Light}>
          Congraulations, you're Light Yagami from Death Note!
        </Text>

        <Text></Text>

        <Text style={styles.description}>
          You're a natural born genius and people tend to gravitate to you for
          your intelligence and advice. Even though your intentions are good,
          sometimes they can cause harm to others which can lead down a dark
          path.
        </Text>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,

    backgroundColor: "saddlebrown",
    alignItems: "center",
    justifyContent: "center",
  },
  Light: {
    
    fontWeight: "bold",
    fontSize: 20,
    margin: 10
  },

  description: {
      margin: 5,
      fontSize: 20,
     textAlign: "center"
     
      
      
  }
});
