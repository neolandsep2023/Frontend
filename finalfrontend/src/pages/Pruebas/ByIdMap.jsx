import L from 'leaflet';
import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import './pruebas.css'
import { postcodes } from '../../../data/noAbrirElArchivoEsDemasiadoLargo/shortPostcodes';




export const ByIdMap = ({postcode, province, ccaa}) => {
  console.log(postcode, province, ccaa)
const [postReady, setPostReady] = useState(false)
const mapRef = useRef(null);
const markerRef = useRef(null);


const centerMap = () => {
  mapRef.current.setView(
    [parseFloat(postcodes[ccaa][province][postcode].latitude), parseFloat(postcodes[ccaa][province][postcode].longitude)],
    15
  );
}


useEffect(() => {
  const createMap = () => {
      if (!mapRef.current) {
        const map = L.map('map', {
          center: [parseFloat(postcodes[ccaa][province][postcode].latitude), parseFloat(postcodes[ccaa][province][postcode].longitude)],
          zoom: 13
        });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        mapRef.current = map;
        const marker = L.marker([parseFloat(postcodes[ccaa][province][postcode].latitude), parseFloat(postcodes[ccaa][province][postcode].longitude)])
          .addTo(map);
        markerRef.current = marker;

      } else {
        mapRef.current.setView(
          [parseFloat(postcodes[ccaa][province][postcode].latitude), parseFloat(postcodes[ccaa][province][postcode].longitude)],
          13
        );
        if (markerRef.current) {
          markerRef.current.setLatLng([parseFloat(postcodes[ccaa][province][postcode].latitude), parseFloat(postcodes[ccaa][province][postcode].longitude)]);
        }
      }
  };

  createMap();
}, []);


  return (
    <>
    <div className='container'>
    <div className='background'>
    {/* <h1>{post.title} <small>by {post.author}</small></h1>
    <p>{post.text}</p>
    <h3 className='tag'>{province}</h3>
    <h3 className='tag'>{postcode}</h3> */}

    </div>
      <div id='map'></div>
      <button onClick={centerMap}>Center Map</button>
      </div>
    </>
  )
}
