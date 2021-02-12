import { Component } from 'react';
import css from './Board.module.css';
import Cell from './Cell/Cell';


class Board extends Component {
    key_down = (event) => {
        console.log(event.key)
        if (['w', 'a', 's', 'd'].includes(event.key))
            this.props.make_move(event.key)
    }

    componentDidMount() {
        document.addEventListener(
            'keydown', this.key_down
        )
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.key_down)
    }

    gen_cells() {
        const state = this.props.game

        const objects_matrix = [];
        for (let i = 0; i < state.n; i++) {
            let row = []
            for (let j = 0; j < state.m; j++) {
                row.push([])
            }
            objects_matrix.push(row)
        }
        const hero = state.hero
        objects_matrix[hero.coords[0]][hero.coords[1]].push({ img_src: hero.img_src })

        for (let animal of state.animals) {
            objects_matrix[animal.coords[0]][animal.coords[1]].push({ img_src: animal.img_src })
        }

        let cells = []
        for (let i = 0; i < state.n; i++) {
            for (let j = 0; j < state.m; j++) {
                cells.push(<Cell i={i} j={j} n={state.n} m={state.m} height={state.height} width={state.width} objects={objects_matrix[i][j]} />)
            }
        }
        return cells
    }

    render() {
        return (
            <div id={css.board}>
                {this.gen_cells()}
            </div>
        )
    }
}


export default Board;
