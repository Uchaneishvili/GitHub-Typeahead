import React from 'react'
import styles from './UserItem.module.css'

const UserItem = ({ username, photoUrl }) => {
  return (
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
  )
}

export default UserItem
