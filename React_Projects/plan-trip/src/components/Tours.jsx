import React from 'react'
import Card from './Card'
const Tours = ({tours , removeTour}) => {
  return (
    <div>
       <div>
       <h1>Plan With Love</h1>
       </div>
       <div>
    {
        tours.map((tour)=>{
            return <Card {...tour} removeTour={removeTour}></Card>
        })
    }
       </div>
    </div>
  )
}

export default Tours