import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapaTrackingProps {
  coordenadasActuales: { lat: number; lng: number };
}

const MapaTracking = ({ coordenadasActuales }: MapaTrackingProps) => {
  useEffect(() => {
    const map = L.map("map").setView([coordenadasActuales.lat, coordenadasActuales.lng], 13);


    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([coordenadasActuales.lat, coordenadasActuales.lng]).addTo(map);



    return () => {
    
      map.remove();
    };
  }, [coordenadasActuales]);

  return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
};



export default MapaTracking;
