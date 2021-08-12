import React, {MouseEvent} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

const Affairs = React.memo(function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
            setFilter={props.setFilter}
        />
    ))
    //'low' | 'middle' |  'high'
    const setFilterHandler = (e: MouseEvent<HTMLButtonElement>) => {props.setFilter((e.currentTarget.innerHTML).toLowerCase() as FilterType)} // need to fix
    //@ts-ignore
    const setFilterHandler2 = (e: MouseEvent<HTMLButtonElement>) => {props.setFilter((e.currentTarget.getAttribute('data-filter')).toLowerCase() as FilterType)}
    return (
        <div>

            {mappedAffairs}

            <button data-filter='all' onClick={setFilterHandler}>All</button>
            <button data-filter='high' onClick={setFilterHandler}>High</button>
            <button data-filter='middle' onClick={setFilterHandler}>Middle</button>
            <button data-filter='low' onClick={setFilterHandler2}>Low</button>
        </div>
    )
})

export default Affairs
