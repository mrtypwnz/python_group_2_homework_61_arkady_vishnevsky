import React, {Component} from 'react';
import './Game.css';
import Field from "../../components/Field/Field";
import Cell from "../../components/Field/Cell/Cell";
import Reset from "../../components/Reset/reset";
import Counter from '../../components/Reset/counter';


const FIELD_SIZE = 6;


class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cells: this.generateCells(),
            counter: 0
        }
    }

    generateCells = () => {
        let cells = [];
        let cellsCount = FIELD_SIZE ** 2;
        for (let i = 0; i < cellsCount; i++) {
            cells.push({
                open: false,
                hasItem: false,
            })
        }
        let randomIndex = Math.floor(Math.random() * cellsCount);
        cells[randomIndex].hasItem = true;
        return cells;
    };

    openCell = (id) => {
        let cell = {...this.state.cells[id]};

        if (!cell.open) {
            cell.open = true;

            let cells = [...this.state.cells];
            cells[id] = cell;

            let state = {...this.state};
            state.cells = cells;
            state.counter = state.counter + 1;

            this.setState(state);
        }
    };

    resetCell = () => {
        let newCells = this.generateCells();
        let state = {...this.state};
        state.cells = newCells;
        state.counter = 0;
        this.setState(state)
    };

    render() {
        return (
            <div className="container">
                <Field>
                    {this.state.cells.map((item, index) =>
                        <Cell
                            cell={item}
                            key={index}
                            click={() => this.openCell(index)}
                        />
                    )}
                </Field>
                <Reset reset={this.resetCell}/>
                <Counter counter={this.state.counter}/>
            </div>
        );
    }
}

export default Game;
