import React from "react";
import Temperature from "../Temperature";
import CurrentDay from "../CurrentDay";
import {WeatherData} from "../../API";
//styles
import "./state.scss";
type Props = {
  data: WeatherData;
};

const State: React.FC<Props> = ({data}) => {
  return (
    <>
      <div className="current-statss">
        <Temperature currentDayTemp={data.current} />
        <CurrentDay currentDayDetails={data.current} />
      </div>
    </>
  );
};

export default State;
