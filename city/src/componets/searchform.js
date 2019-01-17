import React from 'react';

export default function SearchForm(props) {
  return (
    <form onSubmit ={props.handleSubmit}>
      <label htmlFor ='city'> Search for a location </label>
    <input
        name= 'City'
        placeholder= 'Enter A Location Here'
        onChange ={props.handleChange}
      />
      <button type= 'submit'>Explore!</button>
    </form>
  );
}
