import { createContext, useContext, useReducer } from "react";
import { SaveLaterReducer } from "../Reducers/SaveLaterReducer";

const SaveLaterContext = createContext();

const initialState = {
  saveLaterItems: [],
};

const SaveLaterProvider = ({ children }) => {
  const [saveLaterState, saveLaterDispatch] = useReducer(
    SaveLaterReducer,
    initialState
  );

  return (
    <SaveLaterContext.Provider value={{ saveLaterState, saveLaterDispatch }}>
      {children}
    </SaveLaterContext.Provider>
  );
};

const useSaveLater = () => useContext(SaveLaterContext);

export { useSaveLater, SaveLaterProvider };
