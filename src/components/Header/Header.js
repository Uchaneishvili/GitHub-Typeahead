import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import SkeletonImageLoading from '../SkeletonImageLoading/SkeletonImageLoading'

const Header = () => {
  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = './assets/GitHub_Logo_Animation.gif'

    // Event handler: Triggered when the image successfully loads
    img.onload = () => {
      setImgLoaded(true)
    }

    return () => {
      img.onload = null
    }
  }, [])
  return (
    <div className={styles.header}>
      <div className={styles.innerContainer}>
        <div className={styles.logoContainer}>
          {imgLoaded ? (
            <img
              src='./assets/GitHub_Logo_Animation.gif'
              alt='GitHub'
              loading='lazy'
            />
          ) : (
            <div className={styles.skeletonContainer}>
              <SkeletonImageLoading className={'logo'} />
            </div>
          )}
        </div>
        <div className={styles.titleContainer}>
          <h4>Github Typeahead</h4>
        </div>
      </div>
    </div>
  )
}

export default Header
