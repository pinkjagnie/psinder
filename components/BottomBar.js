import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const BottomBar = ({ likePressHandler, passPressHandler }) => {
  return(
    <View style={styles.container}>
      <View />
      <TouchableOpacity style={styles.button} onPress={passPressHandler}>
        <FontAwesome name="times" size={27} color="#F06795"></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={likePressHandler}>
        <FontAwesome name="heart" size={27} color="#64EDCC"></FontAwesome>
      </TouchableOpacity>
      <View />
    </View>
  )
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.46,
    elevation: 9,
  },
})