import { createStore } from "redux";
import rootReducer from "./Redux/reducers/main";


const store=createStore(
    rootReducer
);

export default store