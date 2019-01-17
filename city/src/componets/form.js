import React from 'react';

export default function Form (props) {
  return (
    <Form onSubmit={props.handleSubmit}>
      <label htmlfor='city'>Search</label>
      <input
        type='text'
        name='city'
        onChange={props.handleChange}
        placeholder='Enter location here'
      />
      <button type='submit'>EXPLORE!</button>

    </Form>
  );
}
