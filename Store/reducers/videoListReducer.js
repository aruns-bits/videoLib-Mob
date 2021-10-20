import { GET_VIDEO_LIST, SELECT_COURSE } from "../actions/VideoList";

const initialState = { videos: {}, selectedCourse: "" };
const videoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEO_LIST:
      return {
        ...state,
        videos: {...action.payload},
      };
    case SELECT_COURSE:
      return {
        ...state,
        selectedCourse: action.payload,
      };
    default:
      return state;
  }
};

export default videoListReducer;
