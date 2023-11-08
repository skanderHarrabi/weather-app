import React from "react";
import {useHomeFetch} from "../hooks/usehomeFetch";
import Grid from "../components/Grid";
import Spinner from "../components/Spinner";
import Thumb from "../components/Thumb";
import State from "../components/State";
import Header from "../components/Header";
import {daily} from "../API";

const Home: React.FC = () => {
  const {state, isLoading, isError} = useHomeFetch();

  if (isError) return <div>Something went wrong ...</div>;

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && Object.keys(state).length > 0 && (
        <>
          <Header today={state.current && state.current.dt} />
          <State data={state} />
          <Grid header="Next Days">
            {state?.daily?.slice(1).map((day: daily, index: number) => (
              <Thumb
                key={index}
                image={`https://openweathermap.org/img/wn/${day.weather[0]?.icon}@2x.png`}
                data={day}
              />
            ))}
          </Grid>
        </>
      )}
    </>
  );
};

export default Home;
