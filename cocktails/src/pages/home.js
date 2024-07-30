import React from 'react'
import SearchForm from '../component/searchForm'
import CocktailList from '../component/cocktailList'
import { useGlobalContext } from '../context'
import Loading from '../component/loading'

const Home = () => {
  return (
    <main>
    <SearchForm />
    <CocktailList />
    </main>
  )
}

export default Home
