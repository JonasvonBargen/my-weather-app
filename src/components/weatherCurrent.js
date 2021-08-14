import React from 'react';
import './styles.css';
import WeatherIcon from "./weathericon";
import { WiSunset, WiSunrise, WiHumidity} from 'weather-icons-react';

const CardExampleCard = ({weatherData}) => (
  <div className="data">
      
      <div className="city">
        {weatherData.city.name}, {weatherData.city.country}
      </div>
      <div className="temp">
        {weatherData.list[0].main.temp}&deg;C
      </div>
      <div className="arrangeIcons" >        
        {weatherData.list[0].weather[0].description}<WeatherIcon description={weatherData.list[0].weather[0].description}/>
      </div>
      <div className="arrangeIcons"> 
        {weatherData.list[0].main.humidity}<WiHumidity size={30}/>
      </div>
      <div className="arrangeIcons">
        {new Date(weatherData.city.sunrise * 1000).toLocaleTimeString('en-GB')} Uhr<WiSunrise size={30}/>
      </div>
      <div className="arrangeIcons">
        {new Date(weatherData.city.sunset * 1000).toLocaleTimeString('en-GB')} Uhr<WiSunset size={30}/>
      </div>
    </div>
)

export default CardExampleCard;