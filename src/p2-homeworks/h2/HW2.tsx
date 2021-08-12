import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'low' | 'middle' |  'high';
export type AffairType = {
    _id: number,
    name: string,
    priority: AffairPriorityType }
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'js', priority: 'middle'},
    {_id: 6, name: 'html & css', priority: 'low'},
    {_id: 7, name: 'react-router', priority: 'middle'},
    {_id: 8, name: 'redux', priority: 'high'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): any => {
    switch(filter){
        case "high":
            return affairs.filter(a => a.priority === 'high');
        case "low":
            return affairs.filter(a => a.priority === 'low');
        case "middle":
            return affairs.filter(a => a.priority === 'middle');
        default: return affairs;
    }
};
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter((a: AffairType) => a._id !== _id);
};

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any
    return (
        <div>
            <hr/>
            homeworks 2
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
