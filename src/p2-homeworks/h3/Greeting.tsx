import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void// need to fix any
    error: string // need to fix any
    totalUsers: any // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)

    return (
        <div>
            <div className={s.form}>
                <input value={name} placeholder={error ? error : name} onChange={setNameCallback} className={ error ? inputClass : s.someClassForInput}/>
                <button onClick={addUser}>add</button>
            </div>

            {error && <span>{`Ошибка: ${error} `}</span>}

            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
