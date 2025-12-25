import React from "react";
import type { User } from '../types/user'
import styles from '../UserItem/userItem.module.css'

interface Props {
    user: User
}

const userItem: React.FC<Props> = ({user}) => {
    return (
        <div className= {styles.item}> 
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Years of Experience: {user.expYears?? 'Not specified'}</p>
        </div>
    );
}

export default userItem;

    


