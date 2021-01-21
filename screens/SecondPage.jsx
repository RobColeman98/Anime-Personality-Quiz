import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";

export default class SecondPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../src/SasukeTest.png")}
          style={{width: 400, height: 250}}
        />
        
        <Text style={styles.question}>How would people best describe you?</Text>
        
        <Text></Text>
        <Text>
          <Button
            title=""
            onPress={() => this.props.navigation.navigate("ThirdPage")}
          />
          {"\u2022" +
            "You are determined and will achieve your dreams even if you constantly fail."}
        </Text>
        <Text></Text>

        <Text>
          <Button
            title=""
            onPress={() => this.props.navigation.navigate("ThirdPage")}
          />
          {"\u2022" +
            "You study those that came before you in order to acheive execellence."}
        </Text>
        <Text></Text>

        <Text>
          <Button
            title=""
            onPress={() => this.props.navigation.navigate("ThirdPage")}
          />
          {"\u2022" +
            "You would stop at nothing for power, even if you have to destroy everyone in your path."}
        </Text>

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
  
  question: {
    margin:10
  }
});
