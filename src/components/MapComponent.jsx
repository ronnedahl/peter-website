import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapComponent = () => {
  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 59.4049, // Latitud för Kronoparken
    lng: 13.5906  // Longitud för Kronoparken
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14} 
      >
        {/* Här kan du lägga till markörer eller andra komponenter */}
      </GoogleMap>
    </LoadScript>
  )
}

export default MapComponent;
