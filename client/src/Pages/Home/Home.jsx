import React from 'react'
import Header from './Header'
import './home.css'
import Stats from './Stats'
import Wastes from './Wastes'
import Counter from './counter'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Wastes />
      <Stats />
      <Counter />
    </div>
  )
}

export default Home