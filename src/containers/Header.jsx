import React from 'react';
import { Logo } from '../components/Logo';
import { Nabvar } from '../components/Navbar';
// import styles from '../styles/containers/header.module.scss';
const Header = () => {
  return (
    <nav className=''>
        <div className=''>
          <Logo className=''/>
          <div>

          </div>

        </div>
        <Nabvar />
    </nav>
  )
}

export { Header };
