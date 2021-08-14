import React, { useEffect, useState } from "react";
import WeatherCurrent from './components/weatherCurrent';
import WeatherForecast from "./components/weatherForecast";
import {TextField, Button} from "@material-ui/core";



export default function App(props) {
  const [userInput, setUserInput] = useState ("");
  const [city, setCity] = useState(props.defaultCity);
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(true);
  


  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=05d1376f687afe611ca347af8fd90cd6&units=metric`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [city])

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(userInput);
  }

  return (
    
    <div>
      {(typeof data.city != 'undefined') ? (
        <div className="App">
          <form className="submit" class="ui action input" onSubmit={handleSubmit}>
            <TextField 
              style={{color:"white"}}
              color="primary"
              id="standard" 
              label="Location..." 
              onChange={e => setUserInput(e.target.value)}
            />
            
            <Button
              style={{backgroundColor:"#54d1ec", fontWeight:"bold"}}
              variant="contained" 
              type="button"
              onClick={handleSubmit} 
            >Search
            </Button>
          </form>
          {(current === true) ? (
          <WeatherCurrent weatherData={data} />
          ): (
          <WeatherForecast weatherData={data} />
          )}
          <Button
            style={{backgroundColor: "#54d1ec", fontWeight: "bold"}}
            variant="contained" 
            type="button"
            onClick={()=>setCurrent(!current)}
          > Change View
          </Button>
        </div>
      ): (
        <div>
          lappen
       </div>
      )}
      
      </div>
  );
}

/*
import React, { useEffect, useState } from "react";
import WeatherCurrent from './components/weatherCurrent';
import {TextField, Button} from "@material-ui/core";


export default function App(props) {
  const [userInput, setUserInput] = useState ("");
  const [city, setCity] = useState(props.defaultCity);
  const [data, setData] = useState([]);
  


  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [city])

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(userInput);
  }

  return (
    
    <div>
      {(typeof data.main != 'undefined') ? (
        <div className="App">
          <form className="submit" class="ui action input" onSubmit={handleSubmit}>
            <TextField 
              style={{color:"white"}}
              color="primary"
              id="standard" 
              label="Location..." 
              onChange={e => setUserInput(e.target.value)}
            />
            
            <Button
              style={{backgroundColor:"#54d1ec", fontWeight:"bold"}}
              variant="contained" 
              type="button"
              onClick={handleSubmit} 
            >Search
            </Button>
          </form>
          <WeatherCurrent weatherData={data} />
          
        </div>
      ): (
        <div>
          
       </div>
      )}
      
    </div>
  );
}
*/