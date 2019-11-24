import React, { useState, useEffect, Dispatch } from "react";
import "./App.css";
import { reducer, initialState, createActions } from "./reducer";
import {useImmerReducer} from 'use-immer'

const App: React.FC = () => {
  const [state, dispatch]:[State, Dispatch<Action>] = useImmerReducer(
    reducer,
    JSON.parse(
      window.localStorage.getItem("state") || JSON.stringify(initialState)
    )
  );

  useEffect(() => window.localStorage.setItem("state", JSON.stringify(state)), [
    state
  ]);

  const [hoveredItem, setHoveredItem] = useState(-1);

  const actions = createActions(dispatch)

  return (
    <div className="App">
      <div className="MehnirList">
        {state.mehnirs.map((m, i) => {
          const isExpired = m.dial <= 0;
          const isHovered = i === hoveredItem;
          return (
            <div
              className="Mehnir"
              onMouseEnter={() => setHoveredItem(i)}
              onMouseLeave={() => setHoveredItem(-1)}
            >
              {isHovered && (
                <button
                  className="CloseButton"
                  onClick={() => actions.removeMehnir(m.location)}
                >
                  x
                </button>
              )}
              <div>
                {m.title} {m.location}
              </div>
              <div
                className={isExpired ? "Expired" : ""}
                style={{ fontSize: 30 }}
              >
                {isExpired ? 0 : m.dial}
              </div>
              {isHovered && (
                <div>
                  <button onClick={() => actions.decrement(m.location)}>-</button>
                  <button onClick={() => actions.increment(m.location)}>+</button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button onClick={actions.addMehnir} disabled={state.mehnirs.length > 2}>
        Add Mehnir
      </button>

      <button onClick={actions.nextDay}>New Day</button>
    </div>
  );
};

export default App;
