import React from "react";

import "./temperature.scss";
import {Current} from "../../API";
type Props = {
  currentDayTemp: Current;
};
const Temperature: React.FC<Props> = ({currentDayTemp}) => {
  return (
    <div className="current-temperature">
      <div className="current-temperature__icon-container">
        <img
          src={`https://openweathermap.org/img/wn/${currentDayTemp.weather[0].icon}@2x.png`}
          className="current-temperature__icon"
          alt=""
        />
      </div>
      <div className="current-temperature__content-container">
        <div className="current-temperature__value">
          {Math.round(currentDayTemp.temp)}&deg;
        </div>
        <div className="current-temperature__summary">
          {currentDayTemp.weather[0]?.main}
        </div>
      </div>
    </div>
  );
};

export default Temperature;
