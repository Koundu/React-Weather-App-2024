//Defining the NavBar Component
import React from 'react'

const TopButtons = ({setQuery}) => {
  const cities = [
    {
      id: 1,
      name: 'Visakhapatnam',
    },
    {
      id: 2,
      name: 'Chennai',
    },
    {
      id: 3,
      name: 'Delhi',
    },
    {
      id: 4,
      name: 'Hyderabad',
    },
    {
      id: 5,
      name: 'Vijayawada',
    }
  ]

  return (
    <div className='flex items-center justify-around my-6'>
      {
        cities.map((city) => (
          <button 
            className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in'
            key={city.id}
            onClick={()=>setQuery({q:city.name})}
            >{city.name}</button>
        ))
      }
    </div>
  )
}

export default TopButtons;