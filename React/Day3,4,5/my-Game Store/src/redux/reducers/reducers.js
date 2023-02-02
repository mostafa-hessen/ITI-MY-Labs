import { combineReducers } from "redux";
// import { productsReducer } from "./productsReducer";
import { GetDataReducer, GetElementDetailes } from "./reducerGetUrl";
const reducers = combineReducers({
  allGame: GetDataReducer,
  GameDetailes:GetElementDetailes
//   product: selectedProductsReducer,
});
export default reducers;