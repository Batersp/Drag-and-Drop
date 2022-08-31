import React, {useState} from 'react';
import style from './Main.module.css'
import {TableColumn} from "../TableColumn/TableColumn";

export const Main = () => {

    const [users, setUsers] = useState<Array<{ name: string, id: number }>>([
        {name: 'Bobi', id: 1},
        {name: 'Jack', id: 2},
        {name: 'Tom', id: 3},
        {name: 'Steve', id: 4},
        {name: 'Hanna', id: 5},
    ])

    const [mentors, setMentors] = useState<Array<{ name: string, id: number }>>([
        {name: 'Dima', id: 100},
        {name: 'Vladimir', id: 101},
        {name: 'Ivan', id: 102},
        {name: 'Igor', id: 103},
        {name: 'Elena', id: 104},
    ])

    return (
        <div className={style.mainContainer}>
            <TableColumn item={users} title='Users'/>
            <TableColumn item={mentors} title='Mentors'/>
        </div>
    );
};

