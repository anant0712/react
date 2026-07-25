import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>This is the Header</h1>
      <button className='btn'>Click me</button>
    </div>
  )
}

export default Header
