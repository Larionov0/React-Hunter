import SkillView from "./SkillView/SkillView"
import css from './SkillPanel.module.css'

function gen_skills(skills, use_skill) {
    return skills.map((skill)=>(<SkillView skill={skill} use={use_skill}/>))
}


export default function SkillsPanel(props) {
    return (
        <div id={css.skills_panel}>
            {gen_skills(props.skills, props.use_skill)}
        </div>
    )
}
