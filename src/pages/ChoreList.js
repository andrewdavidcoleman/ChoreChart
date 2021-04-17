import React, { useContext } from 'react';
import { Context } from '../context/ChoreContext';
import ChoreListItem from '../components/ChoreListItem';

const ChoreList = () => {
    const { state, deleteBlogPost } = useContext(Context);
    const chores = state.map((chore) =>
        <ChoreListItem chore={chore} key={chore.id.toString()}/>
    );

    return (
        <ul>
            <li className="border-bottom">
                <span className="chore-name">Chore</span>
                <span className="day">Sunday</span>
                <span className="day">Monday</span>
                <span className="day">Tuesday</span>
                <span className="day">Wednesday</span>
                <span className="day">Thursday</span>
                <span className="day">Friday</span>
                <span className="day">Saturday</span>
            </li>
            {chores}
            <li>
                <i className="fas fa-plus"></i>
            </li>
        </ul>
    )
}

export default ChoreList