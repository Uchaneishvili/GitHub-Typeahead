import React from 'react'
import styles from './SpinnerLoading.module.css'

const SpinnerLoading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loadingSpinner}></div>
    </div>
  )
}

export default SpinnerLoading
