import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, Button } from "react-native";
import { Video } from "expo-av";

import { COURSES } from "../Data/Courses";

const VideoListScreen = (props) => {
  const [play, setPlay] = useState("");
  const videos = useSelector((state) => state.videoLists);
  const selectedCourse = videos.selectedCourse;

  return (
    <View style={styles.screen}>
      {!videos.videos[selectedCourse] && <Text>No Video available</Text>}
      {videos.videos[selectedCourse] && videos.videos[selectedCourse].map((video) => (
        <View key={video.name} style={styles.video}>
          <Video
            source={{
              uri: video.url,
            }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay={video.name === play}
            isLooping
            style={{ width: 300, height: 300 }}
          />
          <View>
            <Button
              title={play === video.name ? "Pause" : "Play"}
              onPress={() => video.name === play ? setPlay("") : setPlay(video.name)}
            />
          </View>
        </View>
      ))}
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

  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  video:{
    padding: 5
  }
});

export default VideoListScreen;
