import React, { useState, useEffect } from 'react'
import styles from './UserItem.module.css'
import SkeletonLoading from '../SkeletonLoading/SkeletonLoading'

const UserItem = ({ username, photoUrl }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = photoUrl

    // Event handler: Triggered when the image successfully loads
    img.onload = () => {
      setLoaded(true)
    }

    return () => {
      img.onload = null
    }
  }, [photoUrl])
  return (
    <>
      {loaded ? (
        <li
          className={styles.userItem}
          onClick={() => {
            window.open(`https://github.com/${username}`, '_blank')
          }}
        >
          <img
            src={photoUrl}
            alt={`${username}'s avatar`}
            className={styles.avatar}
          />
          {username}
        </li>
      ) : (
        <SkeletonLoading />
      )}
    </>
  )
}

export default UserItem
