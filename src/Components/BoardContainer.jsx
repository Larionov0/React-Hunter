import { make_move_AC } from "../redux/game_reducer";

const { connect } = require("react-redux");
const { default: Board } = require("./Board");

const map_state_to_props = (state) => {
    return {game: state.game}
}

const map_dispatch_to_props = (dispatch) => {
    return {
        make_move: (side) => {
            dispatch(make_move_AC(side))
        }
    }
}

const BoardContainer = connect(map_state_to_props, map_dispatch_to_props)(Board);
export default BoardContainer