import {createStore,combineReducers} from "redux";
import AllData from './reducer/reducer'

const store = createStore(combineReducers({
    listdata:AllData,
}))
export default store;