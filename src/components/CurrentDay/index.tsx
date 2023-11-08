import React, {useEffect, useRef} from "react";
//styles
import "./currentday.scss";
import {convertUnixTimestampToTime} from "../../helpers";
import {Current} from "../../API";

type Props = {
  currentDayDetails: Current;
};
const CurrentDay: React.FC<Props> = ({currentDayDetails}) => {
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
  }, []);

  return (
    <>
      <div className="current-stats">
        <div>
          <div className="current-stats__value">
            {Math.round(currentDayDetails.wind_speed)}mph
          </div>
          <div className="current-stats__label">Wind</div>
          <div className="current-stats__value">
            {currentDayDetails.rain ?? 0}mm
          </div>
          <div className="current-stats__label">Rain</div>
        </div>
        <div>
          <div className="current-stats__value">
            {convertUnixTimestampToTime(currentDayDetails.sunrise)}
          </div>
          <div className="current-stats__label">Sunrise</div>
          <div className="current-stats__value">
            {convertUnixTimestampToTime(currentDayDetails.sunset)}
          </div>
          <div className="current-stats__label">Sunset</div>
        </div>
      </div>
    </>
  );
};

export default CurrentDay;
