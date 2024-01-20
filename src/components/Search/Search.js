import React, { useState, useCallback, useEffect, useRef } from 'react'
import styles from './Search.module.css'
import { getUsers } from '../../services/UserService'
import UserItem from '../UserItem/UserItem'
import useDebounce from '../../hooks/Debounce'

const Search = () => {
  const [query, setQuery] = useState('')
  const [users, setUsers] = useState([])
  const searchDebounce = useDebounce(query, 300)
  const inputRef = useRef(null)

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

  const handleClear = () => {
    if (query) {
      setQuery('')
      setUsers([])
      inputRef.current.focus()
    }
  }

  return (
    <div className={styles.container}>
      <img src='./assets/Search.png' alt='search' />
      <div className={styles.innerContainer}>
        <div className={styles.searchInputContainer}>
          <input
            className={`${styles.searchInput} ${
              users.length > 0 && styles.suggestActiveInput
            }`}
            ref={inputRef}
            type='text'
            placeholder='Search GitHub users...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <span
            className={styles.searchInputIcon}
            onClick={() => {
              handleClear()
            }}
          >
            {query ? <>&#10006;</> : <>&#128269;</>}
          </span>
        </div>
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
