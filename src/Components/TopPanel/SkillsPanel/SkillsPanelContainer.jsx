import { connect } from "react-redux"
import SkillsPanel from "./SkillsPanel"
import { use_skill_AC } from './../../../redux/game_reducer';


const map_state_to_props = (state) => {
    return {
        skills: state.game.hero.skills
    }
}


const map_dispatch_to_props = (dispatch) => {
    return {
        use_skill: (skill) => {
            dispatch(use_skill_AC(skill))
        }
    }
}

const SkillsPanelContainer = connect(map_state_to_props, map_dispatch_to_props)(SkillsPanel)
export default SkillsPanelContainer
