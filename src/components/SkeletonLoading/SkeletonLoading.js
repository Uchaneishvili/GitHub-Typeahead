import React from 'react'
import styles from './SkeletonLoading.module.css'

const SkeletonLoading = () => {
  return (
    <li className={styles.skeletonContainer}>
      <div className={styles.skeletonInnerContainer}>
        <div className={styles.skeletonAvatar}></div>
        <div className={styles.skeletonDetails}>
          <div className={styles.skeletonUsername}></div>
        </div>
      </div>
    </li>
  )
}

export default SkeletonLoading
