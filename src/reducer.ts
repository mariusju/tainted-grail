import { Dispatch } from "react";
import { getLocationTitle } from "./locations";

const askForLocation = (): number => {
  const answer = prompt("Mehnir location?");
  if (answer) {
    return parseInt(answer) || 0;
  }
  return 0;
};

export const createActions = (dispatch: Dispatch<Action>) => ({
  addMehnir: () => dispatch({ type: "addMehnir", location: askForLocation() }),
  removeMehnir: (location: number): void =>
    dispatch({ type: "removeMehnir", location }),
  increment: (location: number): void =>
    dispatch({ type: "incrementMehnirCounter", location }),
  decrement: (location: number): void =>
    dispatch({ type: "decrementMehnirCounter", location }),
  nextDay: (): void => dispatch({ type: "nextDay" })
});

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "addMehnir":
      const exists = state.mehnirs.find(m => m.location === action.location);
      if (!exists) {
        const title = getLocationTitle(action.location);
        if (title) {
          state.mehnirs.push({ location: action.location, title, dial: 6 });
        }
      }
      return
    case "removeMehnir":
      const index = state.mehnirs.findIndex(
        m => m.location === action.location
      );
      state.mehnirs.splice(index, 1);
      return
    case "incrementMehnirCounter": {
      const mehnir = state.mehnirs.find(m => m.location === action.location);
      if (mehnir) {
        mehnir.dial++;
      }
      return
    }
    case "decrementMehnirCounter":
      const mehnir = state.mehnirs.find(m => m.location === action.location);
      if (mehnir && mehnir.dial > 0) {
        mehnir.dial--;
      }
      return
    case "nextDay":
      state.mehnirs.forEach(m => {
        if (m.dial > 0) {
          m.dial--;
        }
      });
      return
    default:
      return
  }
};

export const initialState = { mehnirs: [] };
