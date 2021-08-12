import React from 'react'
import style from './Message.module.css'


type MessagePropsType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
};

// type MessagePropsType = {
//     [key: string]: string
// }
export function Message({ avatar, name, message, time}: MessagePropsType) {
    return (
        <div className={style.mainBlock}>
            <img className={style.avatar} src={avatar} alt={`${name} avatar`} />

            <div className={style.angle}></div>

            <div className={style.messageBlock}>
                <div className={style.name}>{name}</div>
                <div className={style.message}>{message}</div>
                <div className={style.time}>{time}</div>
            </div>
        </div>
    )
}

