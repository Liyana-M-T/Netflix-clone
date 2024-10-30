import React from 'react'
import './Home.css'
import NavBar from '../../Components/NavBar/NavBar'
import Banner from '../../Components/Banner/Banner'
import RowPost from '../../Components/RowPost/RowPost'
import {originals,actions,comedymovies} from '../../Urls'
const Home = () => {

  
  return (
    <div>
      <NavBar/>
  <Banner/>
  <RowPost url={originals} title='Netflix Originals' />
  <RowPost url={actions} title='Action' isSmall/>
  <RowPost url={comedymovies} title='ComedyMovies' isSmall/>
    </div>
  )
}

export default Home
