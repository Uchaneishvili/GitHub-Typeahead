import React from 'react'
import styles from './UserItem.module.css'

const UserItem = ({ username }) => {
  return <li className={styles.userItem}>{username}</li>
}

export default UserItem
