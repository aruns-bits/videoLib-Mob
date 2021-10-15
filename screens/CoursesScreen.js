import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Button,
} from "react-native";
import CourseGridTile from "../components/CourseGridTile";
import { COURSES } from "../Data/Courses";

const CoursesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CourseGridTile
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "VideoList",
            params: {
              courseId: itemData.item.id,
            },
          });
        }}
      />
    );
  };
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
        <Button title="search" />
      </View>
      <FlatList data={COURSES} renderItem={renderGridItem} numColumns={2} />
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
