import * as React from "react";
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import FirstPage from "./FirstPage";
import { createStackNavigator} from "@react-navigation/stack"
import { withNavigation } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native"
import 'react-native-gesture-handler';



export default class Home extends React.Component {
  render() {
    return (
      
      <View style={styles.welcome}>
        <View style={styles.container}>
        <Image
          source={require("../src/AnimeCharacters.png")}
          style={{ width: 400, height: 500 }}
        />
          <Text>Welcome to my Anime Personality Quiz!</Text>
          <Text>
            We will run you through a series of questions to determine which
            Character bests fits you based on your answers.
          </Text>
          <Text>Take the Quiz to find out Which Anime Character are you!</Text>
          
            
            <Button
              title="Next Page"
              onPress={() => this.props.navigation.navigate("FirstPage")}/>
         
          </View>
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

  welcome: {
    flex: 1,
  },

  

});
