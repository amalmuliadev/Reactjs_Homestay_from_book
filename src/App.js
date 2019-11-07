import React, { Component } from 'react';
import './App.css';
import Homestay from './components/Homestay'
import GoogleMapReact from 'google-map-react'
import Marker from './components/Marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homestays: [],
      selectedHomestay : null
    };
  }

  componentDidMount(){
    fetch("https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json")
    .then(response => response.json())
    .then((data) => {
      this.setState({
        homestays: data
      });
    })
  }

  selectHomestay = (homestay) => {
    this.setState({
      selectedHomestay: homestay
    })
  }

  render(){
    let center = {
      lat: -7.797068,
      lng: 110.371754
    }
    if(this.state.selectedHomestay){
      center = {
        lat: this.state.selectedHomestay.lat,
        lng: this.state.selectedHomestay.lng
      }
    }

    return (
      <div className="app">
        <div className="main">
          <div className="homestays">
            { this.state.homestays.map((homestay) => {
              return <Homestay key={homestay.id} homestay={homestay} selectHomestay={this.selectHomestay}/>
            }) }
          </div>
        </div>
        <div className="peta">
            <GoogleMapReact center={center} zoom={15}>
              {this.state.homestays.map((homestay) => {
                return <Marker
                        key={homestay.id}
                        lat={homestay.lat}
                        lng={homestay.lng}
                        text={homestay.harga}  selected={homestay === this.state.selectedHomestay}/>
              })}
            </GoogleMapReact>
        </div>
      </div>

    );
  }
}

export default App;
