import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import CoursesScreen from "../screens/CoursesScreen";
import VideoListScreen from "../screens/VideoListScreen";
import VideoDetailsScreen from "../screens/VideoDetailsScreen";

const LibraryNavigator = createStackNavigator({
  Home: HomeScreen,
  Courses: CoursesScreen,
  VideoList: VideoListScreen,
  VideoDetails: VideoDetailsScreen,
});

export default createAppContainer(LibraryNavigator);
