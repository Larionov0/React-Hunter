const { combineReducers, createStore } = require("redux");
const { default: game_reducer } = require("./game_reducer");


let store = createStore(
    combineReducers({
        game: game_reducer
    })
)

window.store = store


export default store;
