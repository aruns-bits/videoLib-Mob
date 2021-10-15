import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const CoursesScreen = (props) => {
  return (
    <View style={{ paddingTop: 30, marginTop: 10 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Search courses"
          style={{
            borderBottomWidth: 1,
            borderColor: "black",
            padding: 5,
            width: 200,
            marginRight: 10,
          }}
        />
        <Button title="search..1" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CoursesScreen;
