//This is the MAin Operative Source of the Application
import React, { useEffect, useState } from 'react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempAndDetails from './components/TempAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function capatalizeFirstLetter(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const App = () => {
  //Reading the Queries
  const [query, setQuery] = useState({ q: "Hyderabad" })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)
  //Getting the Weather Data
  const getWeather = async () => {
    try{
    const cityName = query.q ? query.q : 'current location';
    toast.info(`Fetching Weather data for ${capatalizeFirstLetter(cityName)}`)
    await getFormattedWeatherData({...query,units}).then((data)=>{
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`)
      setWeather(data);
    })
    }
  //Cathcing the error when found
    catch(error){
      if(error.lat === undefined){
        toast.error("City Not Found");
      }
    }
  }

  useEffect(()=>{
    getWeather();
  },[query,units])

    //Changing the background color of the application when the temp is <=20 degrees
  const formatBackground = ()=>{
    if(!weather) return "from-cyan-600 to-blue-700";
    const threshold = units === 'metric' ? 20 : 60
    if(weather.temp <= threshold) return 'from-cyan-600 to-blue-700';
    return 'from-yellow-600 to-orange-700';
  }
  return (
    <div className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} setUnits={setUnits}/>
      {weather && 
      <>
      <TimeAndLocation weather={weather}/>
      <TempAndDetails weather={weather} units={units}/>
      <Forecast title="3 Hour Step Forecast" data={weather.hourly}/>
      <Forecast title="Daily Forecast" data={weather.daily}/>
      </>
      }
      <ToastContainer autoClose={2500}  hideProgressBar={true} theme='colored'/>
    </div>
  )
}

export default App