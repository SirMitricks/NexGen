import { useState } from 'react'
import styles from './Header.module.scss'
import { Photo } from '../../Photo';
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <header>
        <Link to='/Home'><img src={Photo.Logo} className={styles.logoContainer} alt="" /></Link>
        <nav>
            <NavLink to="/Home" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : styles.inactive}`}>HOME</NavLink>
            <NavLink to="/Services" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : styles.inactive}`}>SERVICES</NavLink>
            <NavLink to="/Projects" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : styles.inactive}`}>PROJECTS</NavLink>
            <NavLink to="/About" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : styles.inactive}`}>ABOUT</NavLink>
            <NavLink to="/Careers" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : styles.inactive}`}>CAREERS</NavLink>
            <NavLink to="/Blogs" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : styles.inactive}`}>BLOGS</NavLink>
            <Link to="/ContactUs" className={styles.contactUsContainer}>CONTACT ASS</Link>
        </nav>
      </header>
    </>
  )
}

