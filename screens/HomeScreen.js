import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";

import { getVideoList } from "../Store/actions/VideoList";

const HomeScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoList());
  }, []);

  return (
    <View style={styles.screen}>
      <Text>The Home Screen..</Text>
      <Button
        title="go to courses"
        onPress={() => props.navigation.navigate({ routeName: "Courses" })}
      />
    </View>
  );
};

HomeScreen.navigationOptions = {
  headerTitle: "VLibrary",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
