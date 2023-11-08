import React from "react";
import {render} from "@testing-library/react";
import CurrentDay from "./index";

// Mocked data for testing
const mockCurrentDayDetails = {
  dt: 1636354800,
  sunrise: 1636330000,
  sunset: 1636370000,
  temp: 22.5,
  feels_like: 23.5,
  pressure: 1013,
  humidity: 70,
  dew_point: 15.5,
  uvi: 5,
  clouds: 30,
  visibility: 10,
  wind_speed: 10,
  wind_deg: 210,
  rain: 2.0,
  weather: [
    {
      id: 801,
      main: "Clouds",
      description: "Partly cloudy",
      icon: "02d",
    },
  ],
};

describe("CurrentDay component", () => {
  it("renders with provided data", () => {
    const {getByText} = render(
      <CurrentDay currentDayDetails={mockCurrentDayDetails} />
    );

    // Test for the presence of specific elements and their content
    expect(getByText("10mph")).toBeInTheDocument();
    expect(getByText("2mm")).toBeInTheDocument();
    expect(getByText("Sunrise")).toBeInTheDocument();
    expect(getByText("Sunset")).toBeInTheDocument();
  });
});
