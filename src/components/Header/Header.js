import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.innerContainer}>
        <div className={styles.logoContainer}>
          <img src='./assets/GitHub_Logo_Animation.gif' alt='GitHub' />
        </div>
        <div className={styles.titleContainer}>
          <h4>Github Typeahead</h4>
        </div>
      </div>
    </div>
  )
}

export default Header
