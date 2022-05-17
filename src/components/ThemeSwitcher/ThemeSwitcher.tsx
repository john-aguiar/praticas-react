import { useContext, useReducer } from "react";
import { Context } from "../../contexts/Context";
import { carReducer } from "../../reducers/carReducer";
import "./style.css";

export const ThemeSwitcher = () => {
  const { state, dispatch } = useContext(Context);

  function handleSwitchTheme() {
    if (state.theme.status === "light") {
      dispatch({
        type: "CHANGE_STATUS",
        payload: {
          status: "dark",
        },
      });
    } else {
      dispatch({
        type: "CHANGE_STATUS",
        payload: {
          status: "light",
        },
      });
    }
  }

  return (
    <div
      className="container"
      style={{
        backgroundColor: state.theme.status === "light" ? "white" : "black",
        color: state.theme.status === "light" ? "black" : "white",
      }}
    >
      <h1> ThemeSwitcher Component</h1>
      <h2 className="title">{state.theme.status} mode</h2>

      <button className="btn" onClick={handleSwitchTheme}>
        Switch theme
      </button>
    </div>
  );
};
