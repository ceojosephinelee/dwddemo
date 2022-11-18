import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Alert } from "react-native";
import * as Location from "expo-location";

export default class extends React.Component {
  getLocation = async () => {
    try {
      const response = await Location.requestPermissionsAsync();
      console.log(response);
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
    } catch (error) {
      Alert.alert("Can't find you.", "Please Try Again!");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    color: "white",
  },
});
