import React from 'react'
import Loading from './loading';
import { useGlobalContext } from '../context';
import Cocktail from './cocktail';

const CocktailList = () => {
  const {loading, cocktailList} = useGlobalContext();
  
  if(loading){
    return <Loading />
  }
  if(cocktailList.length < 1){
    return(
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktailList.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default CocktailList
