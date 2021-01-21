import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";

export default class ThirdPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../src/BackTurn.png")}
          style={{width: 300, height: 400}}
         
        />
        
        <Text style={styles.question}>What drives you?</Text>

        <Text></Text>

        <Text>
        <Button
            title=""
            onPress={() => this.props.navigation.navigate("Naruto")}
          />
          {"\u2022" + "Becoming a strong leader amongst your people"}
        </Text>

        <Text></Text>

        <Text>
        <Button
            title=""
            onPress={() => this.props.navigation.navigate("Deku")}
          />
          {"\u2022" + "Becoming a worldwide hero who people can rely on"}</Text>

        <Text></Text>

        <Text>
        <Button
            title=""
            onPress={() => this.props.navigation.navigate("Light")}
          />
          {"\u2022" + "Becoming powerful in all facets of life "}</Text>
        
        <StatusBar style="auto" />
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

  question:{
    margin:10
  }

  
});
