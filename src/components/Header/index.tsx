import React from "react";

import "./header.scss";
import {convertUnixTimestampToDate} from "../../helpers";

type Props = {
  today: number;
};

const Header: React.FC<Props> = ({today}) => {
  return (
    <div className="header_wrapper">
      <div className="header_content">
        <h1>Weather App</h1>
        <h4>{convertUnixTimestampToDate(today)}</h4>
      </div>
    </div>
  );
};

export default Header;
