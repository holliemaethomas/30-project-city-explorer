import React from 'react';
const Meetups = props => {
  return (
    <section>
      <h3> Results</h3>
      <ul className='meetups-results'>
        {props.data && props.data.map((item, key) => {
          return (
            <li key={key}>
              <a href='{item.link'>{item.name}</a>
            </li>
          );
        })};
      </ul>
    </section>
  );
};
export default Meetups;
