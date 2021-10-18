import { StatusBar } from "expo-status-bar";
import React from "react";
import LibraryNavigatior from "./Navigation/LibraryNavigatior";
import { createStore, combineReducers } from "redux";
import videoListReducer from "./Store/reducers/videoListReducer";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  videoLists: videoListReducer,
});
const store = createStore(rootReducer);
export default function App() {
  return (
    <Provider store={store}>
      <LibraryNavigatior />
    </Provider>
  );
}
