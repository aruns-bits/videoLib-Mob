import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Home Screen..</Text>
      <Button title="go to courses" onPress={()=>props.navigation.navigate({routeName:'Courses'})} />
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

export default HomeScreen;
