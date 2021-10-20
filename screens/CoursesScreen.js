import React, { useState } from "react";
import { View, TextInput, StyleSheet, FlatList, Button } from "react-native";
import { useDispatch } from "react-redux";
import CourseGridTile from "../components/CourseGridTile";
import { COURSES } from "../Data/Courses";
import { selectCourse } from "../Store/actions/VideoList";

const CoursesScreen = (props) => {
  const [key, setCourse] = useState("");
  const dispatch = useDispatch();

  const renderGridItem = (itemData) => {
    return (
      <CourseGridTile
        title={itemData.item.title}
        onSelect={() => {
          dispatch(selectCourse(itemData.item.title));
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
          onChangeText={(crs) => setCourse(crs)}
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
      <FlatList
        data={COURSES.filter((course) => {
          return key ? course.title.startsWith(key) : true;
        })}
        renderItem={renderGridItem}
        numColumns={2}
      />
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
