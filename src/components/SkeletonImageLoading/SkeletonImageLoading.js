import React from 'react'
import styles from './SkeletonImageLoading.module.css'

const SkeletonImageLoading = ({ className }) => {
  return <div className={styles[className]}></div>
}

export default SkeletonImageLoading
