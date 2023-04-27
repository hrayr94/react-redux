import { loadCurrentUser } from "./currentUserAPI";

export function currentUserReducer(state = {}, action) {
  if (action.type === "edit-current-user-name") {
    return {
      ...state,
      name: action.payload.name,
    };
  }
  return state;
}

export const initialCurrentUser = {
  name: "Joe Shmoe",
};

export function selectName(state) {
  return state.currentUser.name;
}

export function editName(newName) { // action creator
  return { // action
    type: "edit-current-user-name",
    payload: {
      name: newName,
    },
  }
}


export function loadUser() {
  return (dispatch, getState) => {
    return loadCurrentUser().then((loadedUser) => {
      dispatch(editName(loadedUser.name));
    });
  };
}
