import React from 'react'
import CardComponent from '../card/card'
import './cards.css'
import {Typography, Grid} from '@material-ui/core'

const Cards = ({data: {confirmed, deaths, recovered, lastUpdate}}) => {
  
  if(!confirmed){
    return 'Loading...'
  }
  return (
   <div className="container">
    <Typography gutterBottom variant='h4' component='h2'>Global</Typography>
    <Grid container spacing={3} justifyContent='center'>

      <CardComponent 
      className='infected'
      cardTitle="Infected"
      value={confirmed.value}
      lastUpdate={lastUpdate}
      cardSubtitle="Number of active cases from COVID-19."
      />

      <CardComponent 
      className='recovered'
      cardTitle="Recovered"
      value={recovered.value}
      lastUpdate={lastUpdate}
      cardSubtitle="Number of recovered cases from COVID-19."
      />

     <CardComponent 
      className='deaths'
      cardTitle="Deaths"
      value={deaths.value}
      lastUpdate={lastUpdate}
      cardSubtitle="Number of deaths cases from COVID-19."
      />
    </Grid>
   </div>
  )
}

export default Cards
