import React from 'react'
import Navbar from '../components/navbar/Navbar'
import SearchIcon from '@mui/icons-material/Search';
import './home.scss'
import Featured from '../components/featured/Feature';
import List from '../components/list/List'


export default function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Featured/>
        <List/>
    </div>
  )
}
