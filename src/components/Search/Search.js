import React, { useState, useEffect } from 'react'
import styles from './Search.module.css'
import { getUsers } from '../../services/UserService'

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
    <div>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          type='text'
          placeholder='Search GitHub users...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => console.log(user)}>
            {user.login}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search
