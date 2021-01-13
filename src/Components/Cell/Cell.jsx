import css from './Cell.module.css'
import Sprite from './Sprite/Sprite'

function calculate_position_and_sizes(i, j, n, m, height, width) {
    let h = height / n
    let w = width / m
    return {
        height: h,
        width: w,
        top: i * h,
        left: j * w
    }    
}

export default function Cell({i, j, n, m, height, width, objects=[]}) {
    const style = calculate_position_and_sizes(i, j, n, m, height, width)

    const show_upper_object = ()=>{
        if (objects.length > 0) {
            return <Sprite height={style.height-2} width={style.width-2} img_src={objects[0].img_src}/>
        }
    }

    return (
        <div className={css.cell} style={style}>
            {show_upper_object()}
        </div>
    )
}