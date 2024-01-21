import React, { useState, useCallback, useEffect, useRef } from 'react'
import styles from './Search.module.css'
import { getUsers } from '../../services/UserService'
import UserItem from '../UserItem/UserItem'
import useDebounce from '../../hooks/Debounce'
import SpinnerLoading from '../SpinnerLoading/SpinnerLoading'
import SkeletonImageLoading from '../SkeletonImageLoading/SkeletonImageLoading'

const Search = () => {
  const [query, setQuery] = useState('')
  const [users, setUsers] = useState([])
  const [loader, setLoader] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  const inputRef = useRef(null)
  const searchDebounce = useDebounce(query, 300)
  // To prevent multiple rapid requests, it's a better idea to use debounce.

  const fetchUsers = useCallback(async () => {
    try {
      setLoader(true)
      const response = await getUsers(searchDebounce)
      const data = await response.json()

      if (response.status !== 200) {
        // Throw an error if the API response does not indicate success.
        throw new Error(`Error: ${response.status} - ${response.statusText}`)
      }

      setUsers(data.items)
      setLoader(false)
    } catch (error) {
      console.error('Error fetching users:', error)
      setLoader(false)
    }
  }, [searchDebounce])

  useEffect(() => {
    if (searchDebounce) {
      fetchUsers()
    }
  }, [searchDebounce, fetchUsers])

  useEffect(() => {
    const img = new Image()
    img.src = './assets/Search.png'

    // Event handler: Triggered when the image successfully loads
    img.onload = () => {
      setImgLoaded(true)
    }

    return () => {
      img.onload = null
    }
  }, [])

  const handleClear = () => {
    if (query) {
      setQuery('')
      setUsers([])
      inputRef.current.focus()
    }
  }

  return (
    <>
      <div className={styles.container}>
        {imgLoaded ? (
          <img
            src='./assets/Search.png'
            alt='search'
            loading='lazy'
            className={users.length > 0 ? styles.mainImage : ''}
          />
        ) : (
          <div
            className={
              users.length > 0 ? styles.mainImage : styles.skeletonContainer
            }
          >
            <SkeletonImageLoading className={'image'} />
          </div>
        )}

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
              onChange={(e) => {
                setQuery(e.target.value)

                if (!e.target.value) {
                  setUsers([])
                }
              }}
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

        {loader && <SpinnerLoading />}

        {users.length > 0 && (
          <div className={styles.innerContainer}>
            <div className={styles.userItemContainer}>
              <ul>
                {users.map((user) => (
                  <div key={user.id}>
                    <UserItem
                      username={user.login}
                      photoUrl={user.avatar_url}
                    />
                  </div>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Search
