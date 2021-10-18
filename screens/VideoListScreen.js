import React from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

import { COURSES } from "../Data/Courses";

const VideoListScreen = (props) => {
  const videos = useSelector(state => state.videoLists);
  console.log(videos);

  return (
    <View style={styles.screen}>
      <Text>The Video List Screen..</Text>
    </View>
  );
};

VideoListScreen.navigationOptions = (navigationData) => {
  const CourseId = navigationData.navigation.getParam("courseId");
  const Course = COURSES.filter((course) => {
    return String(course.id) === String(CourseId);
  });

  return {
    headerTitle: Course[0].title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default VideoListScreen;
