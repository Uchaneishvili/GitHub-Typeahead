import React from 'react'
import styles from './Header.module.css'
import { GitHub } from '../../icons/github'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.innerContainer}>
        <div className={styles.logoContainer}>
          <GitHub />
        </div>
        <div className={styles.titleContainer}>
          <span>Github Typeahead</span>
        </div>
      </div>
    </div>
  )
}

export default Header
