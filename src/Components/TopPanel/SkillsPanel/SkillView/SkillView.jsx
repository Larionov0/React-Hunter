import css from './SkillView.module.css';


export default function SkillView ({skill, use}) {
    return (
        <div id={css.skill_view} onClick={()=>{use(skill)}}>
            <h2>{skill.name}</h2>
            <p>{skill.description}</p>
        </div>
    )
}
