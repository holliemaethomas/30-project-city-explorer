import React from 'react';
const Yelp = props => {
  return (
    <section className='yelp-container'>
      <h3> Results</h3>
      <ul className='yelp-results'>
        {props.data && props.data.map((item, key) => {
          return (
            <li key={key}>
              <a href='{item.url}'>{item.name}</a>
              <p>
                The average rating is {item.rating} out of five, and the average price is {item.price} out of four
              </p>
              <img src={item.image_url} alt='yelp pics'/>
              <p>{item.overview}</p>
            </li>
          );
        })};
      </ul>
    </section>
  );
};
export default Yelp;
