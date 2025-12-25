import type { User } from '../types/user.ts';

export const fetchUsers = async(): Promise<User[]> => {
    return [
        { id: 1, name:'Alisa', email: 'alica1@gmail.com', expYears: 5 },
        { id: 2, name:'Alex', email: 'AlexRogr1guez@gmail.com'},
        { id: 3, name:'Mark', email: 'Twen1976@gmail.com'}
    ];
};
