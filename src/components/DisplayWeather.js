import React from "react";

export default function DisplayWeather(props) {
  console.log(props);
  const {
    location,
    temperature,
    description,
    region,
    country,
    wind_speed,
    pressure,
    precip,
    humidity,
    img,
  } = props.weatherData;
  return (
    <div classNameName="row">
      <div classNameName="col-md-12">
        <div className="row">
          <div className="col-md-6">
            <h1 className="saround">
              <i class="fa fa-map-marker icon-space" aria-hidden="true"></i>
              {country} , {region}
            </h1>
          </div>
          <div className="col-md-6">
            <h2 className="saround">
              <i
                class="fa fa-thermometer-empty icon-space"
                aria-hidden="true"
              ></i>
              {temperature} <sup>o</sup>C
            </h2>
          </div>
        </div>
      </div>
      <div className="col-md-12 bg-weat">
        <div className="row">
          <div className="col-md-4">
            <div className="card border-success m-3  bg-transparent">
              <div className="card-body text-center ">
                <h5>
                  {" "}
                  <i
                    class="fa fa-location-arrow icon-space"
                    aria-hidden="true"
                  ></i>
                  {location}
                </h5>
                <p>Location</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-success m-3  bg-transparent">
              <div className="card-body text-center ">
                <h5>
                  <i
                    class="fa fa-info-circle icon-space"
                    aria-hidden="true"
                  ></i>
                  {description}
                </h5>
                <p>Description</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-success m-3  bg-transparent">
              <div className="card-body text-center ">
                <h5>
                  <i class="fa fa-ravelry icon-space" aria-hidden="true"></i>
                  {pressure}
                </h5>
                <p>Pressure</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-success m-3  bg-transparent">
              <div className="card-body text-center ">
                <h5>
                  <i class="fa fa-tint icon-space" aria-hidden="true"></i>
                  {humidity}
                </h5>
                <p>Humidity</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-success m-3  bg-transparent">
              <div className="card-body text-center ">
                <h5>
                  <i class="fa fa-flag icon-space" aria-hidden="true"></i>
                  {wind_speed}
                </h5>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-success m-3  bg-transparent">
              <div className="card-body text-center ">
                <h5>
                  <i class="fa fa-magic icon-space" aria-hidden="true"></i>
                  {precip}
                </h5>
                <p>Precip</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
