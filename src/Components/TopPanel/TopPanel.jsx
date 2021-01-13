import Info from './Info/Info';
import css from './TopPanel.module.css'

export default function TopPanel(props) {
    return (
        <div id={css.top_panel}>
            <img src="https://www.pngarts.com/files/5/Hero-PNG-Pic.png" alt=""/>
            <Info name={props.name} hp={props.hp} details={props.details}/>
        </div>
    )
}