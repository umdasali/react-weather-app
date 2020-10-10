import React from "react";
import Axios from "axios";
import DisplayWeather from "./components/DisplayWeather";
import Navbar from "./components/Navbar";

class App extends React.Component {
  //state
  state = {
    coords: {
      latitude: 42,
      longitude: 88,
    },

    data: {},

    inputData: "",
  };

  componentDidMount() {
    // get device location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        this.setState({ coords: newCoords });

        // call the api
        Axios.get(
          `http://api.weatherstack.com/current?access_key=eb07b3bddf0f6bfa10391b2ea1dd8a0d&query=${this.state.coords.latitude},${this.state.coords.longitude}`
        ).then((res) => {
          let weatherData = {
            location: res.data.location.name,
            temperature: res.data.current.temperature,
            description: res.data.current.weather_descriptions[0],
            region: res.data.location.region,
            country: res.data.location.country,
            wind_speed: res.data.current.wind_speed,
            pressure: res.data.current.pressure,
            precip: res.data.current.precip,
            humidity: res.data.current.humidity,
            img: res.data.current.weather_icons,
          };
          this.setState({ data: weatherData });
        });
      });
    } else {
      console.log("not supported");
    }
  }
  //track the input field
  change = (value) => {
    this.setState({ inputData: value });
  };
  changeWheather = (event) => {
    event.preventDefault();

    //api call
    Axios.get(
      `http://api.weatherstack.com/current?access_key=eb07b3bddf0f6bfa10391b2ea1dd8a0d&query=${this.state.inputData}`
    ).then((res) => {
      let weatherData = {
        location: res.data.location.name,
        temperature: res.data.current.temperature,
        description: res.data.current.weather_descriptions[0],
        region: res.data.location.region,
        country: res.data.location.country,
        wind_speed: res.data.current.wind_speed,
        pressure: res.data.current.pressure,
        precip: res.data.current.precip,
        humidity: res.data.current.humidity,
        img: res.data.current.weather_icons,
      };
      this.setState({ data: weatherData });
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <Navbar
          changeWheather={this.changeWheather}
          changeRegion={this.change}
        />
        <DisplayWeather weatherData={this.state.data} />
      </div>
    );
  }
}

export default App;
