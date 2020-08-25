import React, { useState } from 'react';

const api={
  key:"1708d41186dfce688d1d1273b6e6469b",
  base:"http://api.weatherstack.com/"
}
function App() {
  const [query,setquery]=useState('');
  const [weather,setweather]=useState({});
  const search=event=>{
    if(event.key==='Enter')
    {
      fetch(`${api.base}current?access_key=${api.key}&query=${query}`)
      .then(res=>res.json())
      .then(result=>{
        setweather(result);
        setquery('');
      });
    }
  }
  return (
    <div className={(typeof weather.current!='undefined')?((weather.current.temperature>28)?'App warm':'App'):'App'}>
      
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..."
            onChange={e=>setquery(e.target.value)} value={query} onKeyPress={search}>
          </input>
        </div>
        {(typeof weather.current!='undefined')?(
          <div>
              <div className="location-box">
                  <div className="location">
                        {weather.location.name}, {weather.location.country}
                  </div>
                  <div className="date">
                      {new Date().toDateString()}
                  </div>
              </div>
              <div className="weather-box">
                <div  className="temp">
                    {weather.current.temperature}&#x2103;
                </div>
                <div className="weather">
                    {weather.current.weather_descriptions}
                </div>
              </div>
          </div>
        ):('')}
    </div>
  );
}

export default App;
