import React from 'react';

const Movies = props => {
  return (
    <section className='movie-container'>
      <h3> Results</h3>
      <ul className='movies-results'>
        {props.data && props.data.map((item, key) => {
          return (
            <li key={key}>
              <p>
                <span>{item.title}</span> was released on {item.released}. out of {item.total_votes} total votes {item.title} has an average vote of {item.average_votes} and popularity score of {item.popularity}
              </p>
              <img src={item.image_url} />
              <p>{item.overview}</p>
            </li>
          );
        })};
      </ul>
    </section>
  );
};
