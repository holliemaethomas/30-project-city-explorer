import React from 'react';

const Weather = props => {
  return (
    <section>
      <h3> Results</h3>
      <ul className='weather-results'>
        {props.data && props.data.map((item, key) => {
          return (
            <li>
            The forcast for {item.time} is {item.forecast}
            </li>
          );
        })};
      </ul>
    </section>
  );
};

export default Weather;
