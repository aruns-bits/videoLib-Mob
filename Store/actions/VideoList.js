export const GET_VIDEO_LIST = "GET_VIDEO_LIST";
export const SELECT_COURSE = "SELECT_COURSE";

export const getVideoList = () => {
  return async (dispatch) => {
    const response = await fetch("http://192.168.29.218:4001/videos");

    const data = await response.json();

    dispatch({
      type: GET_VIDEO_LIST,
      payload: data,
    });
  };
};

export const selectCourse = (course) => {
  return {
    type: SELECT_COURSE,
    payload: course,
  };
};
