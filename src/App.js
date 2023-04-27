import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { editName, loadUser, selectName } from "./features/currentUser/currentUserSlice";
import { useEffect } from "react";

function App() {
  
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(loadUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="App">
      <h1>{name}</h1>
      <input type="text" value={name}
        onChange={(evt) => {
          dispatch(editName(evt.target.value));
        }}
      />
    </div>
  );
}

export default App;
