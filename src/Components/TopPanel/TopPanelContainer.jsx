import TopPanel from './TopPanel';
const { connect } = require("react-redux")

const map_state_to_props = (state) => {
    return {
        name: state.game.hero.name,
        hp: state.game.hero.hp,
        details: state.game.hero.details
    }
}

const map_dispatch_to_props = (dispatch) => {

}


const TopPanelContainer = connect(map_state_to_props, map_dispatch_to_props)(TopPanel);
export default TopPanelContainer