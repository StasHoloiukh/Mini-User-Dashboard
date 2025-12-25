import React from "react";
import type { User } from '../types/user';
import UserItem from "../UserItem/userItem";

interface Props {
    users: User[];
}

const userList: React.FC<Props> = ({users}) => {
    return (
        <div>
            {users.map(user => (
                <UserItem key={user.id} user={user}/>
            ))}
        </div>
    );
};

export default userList;