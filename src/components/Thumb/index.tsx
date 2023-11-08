import React from "react";
import {convertUnixTimestampToDate} from "../../helpers";
import {daily} from "../../API";
//styles
import "./thumb.scss";
//Types
type Props = {
  image: string;
  data: daily;
};

const Thumb: React.FC<Props> = ({image, data}) => {
  return (
    <div className="thumb_container">
      <h4>{convertUnixTimestampToDate(data.dt)}</h4>
      <img src={image} alt="thumb_image" />
      <h5>{Math.round(data.temp.day)}&deg;</h5>
      <div className="thumb_details">
        <div className="thumb_temp_min">
          <p>Min</p>
          <p>{Math.round(data.temp.min)}&deg;</p>
        </div>
        <div className="thumb_temp_max">
          <p>Max</p>
          <p>{Math.round(data.temp.max)}&deg;</p>
        </div>
      </div>
    </div>
  );
};

export default Thumb;
