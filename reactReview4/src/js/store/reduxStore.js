import {createStore} from "redux";
import reducer from "../reducer/newsReducer.js";

var Store = createStore(reducer);

export default Store;