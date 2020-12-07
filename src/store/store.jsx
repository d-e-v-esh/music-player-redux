import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./index";
const store = createStore(rootReducer, devToolsEnhancer({ trace: true }));

// devToolsEnhancer is a store enhancer function

// export default function configureStore() {
//   return store;
// }
export default store;
