import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import "./Map.css";

const lat = 51.5072;
const lng = -10.1276;

const mapStyles = {
  width: "38vw",
  height: "43vh",
};
let GoogleAPIKey = process.env.REACT_APP_GOOGLE;

export class MapContainer extends Component {
  render() {
    return (
      <Map
        className="googleMap"
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        disableDefaultUI={true}
        initialCenter={{
          lat: lat,
          lng: lng,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GoogleAPIKey,
})(MapContainer);
