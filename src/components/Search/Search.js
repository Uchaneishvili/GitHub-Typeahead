import React, { useState, useCallback, useEffect } from 'react'
import styles from './Search.module.css'
import { getUsers } from '../../services/UserService'
import UserItem from '../UserItem/UserItem'
import useDebounce from '../../hooks/Debounce'

const Search = () => {
  const [query, setQuery] = useState('')
  const [users, setUsers] = useState([])
  const searchDebounce = useDebounce(query, 300)

  const fetchUsers = useCallback(async () => {
    try {
      const response = await getUsers(searchDebounce)
      const data = await response.json()
      setUsers(data.items)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }, [searchDebounce])

  useEffect(() => {
    if (searchDebounce) {
      fetchUsers()
    }
  }, [searchDebounce, fetchUsers])

  return (
    <div className={styles.container}>
      <img src='./assets/Search.png' alt='search' />
      <div className={styles.innerContainer}>
        <input
          className={`${styles.searchInput} ${
            users.length > 0 && styles.suggestActiveInput
          }`}
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
                <div key={user.id}>
                  <UserItem username={user.login} photoUrl={user.avatar_url} />
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
