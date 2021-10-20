import { StatusBar } from "expo-status-bar";
import React from "react";
import LibraryNavigatior from "./Navigation/LibraryNavigatior";
import { createStore, combineReducers, applyMiddleware } from "redux";
import videoListReducer from "./Store/reducers/videoListReducer";
import { Provider } from "react-redux";
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  videoLists: videoListReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default function App() {
  return (
    <Provider store={store}>
      <LibraryNavigatior />
    </Provider>
  );
}
