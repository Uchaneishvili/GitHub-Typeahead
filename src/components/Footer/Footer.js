import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
