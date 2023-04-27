import { applyMiddleware, legacy_createStore as createStore, combineReducers } from "redux";
import {currentUserReducer,initialCurrentUser} from "../features/currentUser/currentUserSlice";
import { initialTodos, todosReducer } from "../features/todos/todosSlice";
// import { friendsReducer, initialFriends } from "../features/friends/friendsSlice";
// import { initialPosts, postsReducer } from "../features/posts/postsSlice";
import thunk from "redux-thunk";


const store = createStore(
  combineReducers({
    // friens: friendsReducer,
    currentUser: currentUserReducer,
    todos: todosReducer,
    // posts: postsReducer
  }),
  {
    // friens: initialFriends,
    // posts: initialPosts,
    todos: initialTodos,
    currentUser: initialCurrentUser,
  },applyMiddleware(thunk)
);

export default store;
