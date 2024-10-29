import React, {useState } from 'react'
import { CiSearch } from "react-icons/ci";
function Weather() {
  const [city, setcity] = useState('')
  const [weatherData, setweatherData] = useState(null)
  const search = async( city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    setweatherData(data)
    console.log(data)
  }

  const handleclick = ()=>{
if(city){
  search(city)
  
}


  }
  return (
    <div className='flex justify-center mt-10 '>

   <div className='grid bg-gray-200 max-w-xs p-6 rounded-md  sm:max-w-lg xl:max-w-xl lg:max-w-lg md:max-w-md w-full'>
    <div className='font-semibold text-2xl text-center mb-4'>
      weather
    </div>
    <div className='grid-cols-5 gap-2 ml-[25%]  '>
      <input type="text" value={city} onChange={(e)=>setcity( e.target.value)} placeholder='Enter your city....' className='col-span-4 p-2 rounded-md focus:outline-none text-lg' />
      <button onClick={handleclick} className='bg-gray-500 p-2 text-white translate-y-1 hover:bg-gray-800 text-2xl ml-2  rounded-md'><CiSearch /></button>
   
    </div>
    { 
      weatherData && weatherData.main && (
        <div className='ml-[40%] mt-5  '>
       <div>City- {weatherData.name}</div>
       <div>Temprature-{Math.round(weatherData.main.temp)}°C</div>
       <div>Humidity-{Math.round(weatherData.main.humidity)}</div>
       <div>Clouds- {weatherData.weather[0].description}</div>
       <div>wind- {weatherData.wind.speed}KMPH</div>
       

         
        </div>
      )
    }

{weatherData && weatherData.cod==='404' &&(
  <div className='ml-[45%] mt-5'>
    <div className='text-red-700'>City not found</div>
  </div>
)



}


    </div>   
   
    </div>
  )
}

export default Weather