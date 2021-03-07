import React, { useState, useEffect } from "react"
import './App.css';
import './css/style.css'

function App() {
  const [field, setfield] = useState("")
  const [city, setcity] = useState(null)
  useEffect(() => {
    document.title = "Live Search Weather"
  },[])
  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${field}&appid=9d3b063799ebb1b67bf96d024de5eddc`)
      const resJson = await res.json()
      
      await setcity(resJson.main || null)
      
    }
    fetchApi()
  }, [field])

  const inputHandle = (e) => {
    setfield(e.target.value)
  }

  return (
    <>
      <div className='main'>
        <div className="card">
          <input placeholder="Search" value = {field} onChange = {inputHandle} className="field" type="search" />
        

          {city === null ? (<p className = "datanotfound">No data found</p>) :
            (<div>
              <div className="info">


                <h2 className="location">
                  <i className="fas fa-street-view icon"></i> {field}</h2>
                <h1 className="temp">
                  {city.temp}</h1>
                <h3 className="temp_minmax"> Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
              </div>

              <div className="wave -one"></div>
              <div className="wave -two"></div>
              <div className="wave -three"></div>

            </div>)

          }

        </div>
      </div>


    </>
  );
}

export default App;
