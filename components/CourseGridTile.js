import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CourseGridTile = (props) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View style={styles.container}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 150,
    backgroundColor: "#cce6ff",
    padding: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
});

export default CourseGridTile;
