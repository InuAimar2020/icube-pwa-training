import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import categorylist from './reducer/categorylist'
import userReducer from './reducer/userreducer'


const reducers = combineReducers({
    category: categorylist,
    cart: categorylist,
    user: userReducer
});

const middlewares = applyMiddleware(thunk);

const stores = createStore(
    reducers,
    undefined,
    composeWithDevTools(middlewares)
);

export default stores;