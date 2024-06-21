//Getting Inputs from the User
import React, { useState } from 'react'
import { BiCurrentLocation, BiSearch } from 'react-icons/bi';

const Inputs = ({setQuery,setUnits}) => {
    const [city,setCity] = useState('');
    
    const handleSearchClick = ()=>{
        if(city !== "") setQuery({q:city});
    }
    const handleLocationClick = ()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                const {latitude,longitude} = position.coords
                setQuery({lat:latitude,lon:longitude})
            })
        }
    }
    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                <input
                    value={city}
                    onChange={(e)=>setCity(e.currentTarget.value)}
                    type="text"
                    placeholder='Search By City...'
                    className='text-gray-500 text-xl font-light p-2 w-full shadow-xl capatalize focus:outline-none placeholder:lowercase'
                />
                <BiSearch size={30} className='cursor-pointer transition ease-out hover:scale-125' onClick={handleSearchClick}/>
                <BiCurrentLocation size={30} className='cursor-pointer transition ease-out hover:scale-125' onClick={handleLocationClick}/>
                <div className='flex flex-row w-1/4 items-center justify-center'>
                    <button className='text-2xl font-medium transition ease-out hover:scale-125' onClick={()=>setUnits('metric')}>&deg;C</button>
                    <p className='text-2xl font-medium mx-1'>|</p>
                    <button className='text-2xl font-medium transition ease-out hover:scale-125' onClick={()=>setUnits('imperial')}>&deg;F</button>                </div>
            </div>
        </div>
    )
}

export default Inputs;