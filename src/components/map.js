import Link from 'next/link'
import {
    InfoWindow,
    GoogleMap,
    LoadScript,
    Marker,
  } from "@react-google-maps/api"
import React from "react"
import Data from "../data/data"

const Map = () => {
    let containerStyle = {
        padding: "0px 30px",
        height: "555px",
    }
    let zoom = 5;
    if (typeof window !== "undefined") {
        const width  = document.documentElement.clientWidth
        if(width < 991){
            zoom = 4.5,
            containerStyle = {
                height: "555px",
            }
        }
        if(width < 768){
          zoom = 4,
          containerStyle = {
            width: "100%",
            height: "555px",
          }
        }
        if(width < 600){
            zoom = 3.4
        }
    }
    const options = {
        streetViewControl: false,
        mapTypeControlOptions: false,
        styles: [
          {
              "featureType": "all",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "weight": "2.00"
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#9c9c9c"
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#f2f2f2"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "landscape.man_made",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 45
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#eeeeee"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#7b7b7b"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#46bcec"
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#c8d7d4"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#070707"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          }
        ]
    }
    const [selected, setSelected] = React.useState({})
    const onSelect = (item, index) => {
        setSelected(item)
    }

    return(
        <div className="maxWidth">
            <h1>Code Example</h1>
            <div id="map">
                <LoadScript googleMapsApiKey="AIzaSyBmxA3fvPbVCPv1L2MY1CAJyfTMzKHUMmA">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        options={options}
                        center={{ lat: 41.668633, lng: -102.498153 }}
                        zoom={zoom}
                    >
                    {Data.map((item, index) => {
                        return (
                        <>
                            <Marker
                                icon={{
                                    url:"../../static/small-map-marker.png"
                                }}
                                key={item.name}
                                position={item.location}
                                onClick={() => onSelect(item, index)}
                            />
                        </>
                        )
                    })}
                    {selected.location && (
                        <InfoWindow
                        position={selected.location}
                        clickable={true}
                        options={{ pixelOffset: new window.google.maps.Size(0, -40) }}
                        onCloseClick={() => setSelected({})}
                        >
                        <div>
                            <div className="map-title">
                                <Link
                                    href={selected.link}
                                >
                                    {selected.name}
                                </Link>
                            </div>
                            <br />
                            <div className="maps-info">{selected.address}</div>
                            <br />
                            <a className="map-direction" rel="noreferrer" target="_blank" href={`https://www.google.com/maps/place/${selected.address}`}>Directions</a>
                        </div>
                        </InfoWindow>
                    )}
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    )
}

export default Map