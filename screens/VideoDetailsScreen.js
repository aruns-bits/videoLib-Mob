import React from "react";
import { View, Text, StyleSheet } from "react-native";

const VideoDetails = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Video Details Screen..</Text>
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

export default VideoDetails;
