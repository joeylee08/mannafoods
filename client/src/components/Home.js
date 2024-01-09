import NavBar from './NavBar'
import Header from './Header'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import UserInfo from './UserInfo'

const Home = () => {
  const { loginType, currentUser } = useContext(UserContext)
  const title = loginType === 'user' ? 'Manna Foods Home' : 'Manna Foods Business Home'

  return (
    <div className='container'>
      <Header title={title}/>
      <NavBar/>
      <img className='homeImage' src='https://github.com/joeylee08/mannafoods/blob/main/athens.jpg?raw=true' alt='homepage_image'></img>
      <UserInfo />
    </div>
  )
}

export default Home