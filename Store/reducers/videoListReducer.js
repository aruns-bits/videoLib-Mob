import { GET_VIDEO_LIST } from "../actions/VideoList";

const initialState = {
  mathemathics: [
    { name: "algebra", url: "" },
    { name: "trignomitry", url: "" },
  ],
  programming: [
    { name: "python", url: "" },
    { name: "java", url: "" },
  ],
};
const videoListReducer = (state = initialState, action) => {

  switch(action.type){
    case GET_VIDEO_LIST:
      return {
        ...state,
        labs:[
          {name:"language processor", url:""},
          {name: "graphics", url:""}
        ]
      }
    default: return state 
  }
};

export default videoListReducer;
