import React, { useState, useEffect } from 'react'
import styles from './Search.module.css'
import { getUsers } from '../../services/UserService'
import UserItem from '../UserItem/UserItem'

const Search = () => {
  const [query, setQuery] = useState('')
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers(query)
        const data = await response.json()
        setUsers(data.items)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    if (query) {
      fetchUsers()
    }
  }, [query])

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <input
          className={styles.searchInput}
          type='text'
          placeholder='Search GitHub users...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {users.length > 0 && (
        <div className={styles.innerContainer}>
          <div className={styles.userItemContainer}>
            <ul>
              {users.map((user) => (
                // <li key={user.id} onClick={() => console.log(user)}>
                //   {user.login}
                // </li>
                <UserItem username={user.login} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
