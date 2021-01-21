import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";
import Home from "./Home";

export default class FirstPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
        source={require("../src/Fight.png")}
        
        ></Image>
        <Text>How would you normally plan on defeating your Enemy?</Text>
        
        <Text></Text>

        <View style={styles.bullets}>
          <Text>
            <Button
              title=""
              onPress={() => this.props.navigation.navigate("SecondPage")}
            />
            {"\u2022" + "Charge Head First"}
          </Text>
          
          <Text></Text>

          <Text>
            <Button
              title=""
              onPress={() => this.props.navigation.navigate("SecondPage")}
            />
            {"\u2022" + "Analazye Your Opponent's Weakness and wait for a momment to strike"}
          </Text>

          <Text></Text>
          
          <Text>

            <Button
              title=""
              onPress={() => this.props.navigation.navigate("SecondPage")}
            />
            {"\u2022" + "Manipulate them into joining you"}
          </Text>
          
          <Text></Text>
          
        </View>
        <View style={styles.row}>
          <View style={styles.column}></View>

          <StatusBar style="auto" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "steelblue",
    alignItems: "center",
    justifyContent: "center",
  },

  questions: {
    flex: 1,
  },

  Button: {
    margin: 2,
  },
});
