import React, {MouseEvent} from 'react';
import {AffairType, FilterType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
    setFilter: (filter: FilterType) => void
}

function Affair({affair, deleteAffairCallback, ...props}: AffairPropsType) {
    const deleteCallback = () => {
        deleteAffairCallback(affair._id);
    };

    const color = (priority: FilterType) => {
        switch (priority) {
            case "middle":
                return 'yellow'
            case "high":
                return 'red'
            case "low":
                return 'green'
            default:
                return 'black'
        }
    }
    return (
        <pre>
            <span>{affair.name}</span>
            <span style={{color: color(affair.priority)}} onClick={() => props.setFilter(affair.priority)}>[{affair.priority}]</span>
            <button onClick={deleteCallback}>X</button>
        </pre>
    )
}

export default Affair
