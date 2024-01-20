import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.innerContainer}>
        <div className={styles.logoContainer}>
          <img
            src='./assets/GitHub_Logo_Animation.gif'
            alt='GitHub'
            width={40}
          />
        </div>
        <div className={styles.titleContainer}>
          <span>Github Typeahead</span>
        </div>
      </div>
    </div>
  )
}

export default Header
