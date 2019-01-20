// package imports
import React from 'react';
// import logo from './logo.svg';
// import Main from './componets/main.js';
import superagent from 'superagent';

import './styles/index.css';
import Form from './componets/form.js';
import Header from './componets/Header.js';
import Map from './componets/map.js';
import Weather from './componets/Weather.js';
import Movies from './componets/Movies.js';
import Hiking from './componets/Hiking.js';
import Meetups from './componets/Meetups.js';
import Yelp from './componets/Yelp.js'


const API = "https://city-explorer-backend.herokuapp.com";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      location:{},
      data: {
        trails: [],
        weather:[],
        yelp:[],
        movies:[],
        meetups: []
      }
    };
  }

    handleNewCity = e => {
    let city = e.target.value;
    this.setState({ city });
  };

   explorer = async e => {
    e.preventDefault();

    try {
      let location = await this.getLocation();
      let serviceCalls = this.getData(location);
      let [trails, weather, yelp, movies, meetups] = await Promise.all(serviceCalls)
    

     this.setState({
      location: location.body,
      data: {
        trails:trails.body,
        weather:weather.body,
        yelp: yelp.body,
        movies: movies.body,
        meetups: meetups.body, 
      }
    });
  } catch (e) {
    console.error('Fetch Error', e);
  }
};

 getLocation = () => {
  return superagent.get(`${API}/location`).query({data: this.state.city});
};

 getData = location => {
  let serviceCalls = [];

  Object.keys(this.state.data).forEach(service => {
    let url = `${API}/${service}`;
    serviceCalls.push(
      superagent.get(url)
      .query({data: location.body})
      .ok(res => true),
    );
  });
  return serviceCalls;
}

render() {
  let validLocation = this.state.location && this.state.location.id;

  return (
    <React.Fragment>
      <Header />
      <Form handleChange={this.handleNewCity} handleSubmit={this.explorer} />

      {!validLocation ? null : (
        <React.Fragment>
          <Map location={this.state.location} />

          <div className="column-container">
            <Weather data={this.state.data.weather} />
            <Yelp data={this.state.data.yelp} />
            <Meetups data={this.state.data.meetups} />
            <Movies data={this.state.data.movies} />
            <Hiking data={this.state.data.trails} />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
  } 
}

export default App;
