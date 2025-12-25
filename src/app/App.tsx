import { useState } from 'react';
import { useUsers } from '../components/hooks/useUsers';
import UserList from '../components/UserList/userList';
import styles from './App.module.css';

const App = () => {
  const { users, loading } = useUsers();
  const [filter, setFilter] = useState(''); 

  if (loading) return <p className={styles.loading}>Loading....</p>;

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mini-dash-board</h1>
      
      <input
        type="text"
        placeholder="Search by name..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
        className={styles.searchInput}
      />

      <UserList users={filteredUsers} />
    </div>
  );
};

export default App;
