import L from 'leaflet';
import { useEffect, useRef, useState } from 'react';
import { postcodes } from '../../../data/noAbrirElArchivoEsDemasiadoLargo/shortPostcodes';
import 'leaflet/dist/leaflet.css';
import './pruebas.css'


let post = {
  title: "Busco Piso",
  text: "Hola! Busco piso ",
  location: "Madrid",
  postcode: '28011',
  type: "RoommateSeeker",
  preferredGender: "female",
  preferredAge: "18-25",
  price: 400,
  deposit: true,
  depositPrice: 800,
  author: "Natalia",
  room: "Room 844",
}

export const ByIdMap = ({postcode, province}) => {
const [postReady, setPostReady] = useState(false)
const mapRef = useRef(null);
const markerRef = useRef(null);


const centerMap = () => {
  mapRef.current.setView(
    [parseFloat(postcodes[province][postcode].latitude), parseFloat(postcodes[province][postcode].longitude)],
    15
  );
}


useEffect(() => {
  const createMap = () => {
      if (!mapRef.current) {
        const map = L.map('map', {
          center: [parseFloat(postcodes[province][postcode].latitude), parseFloat(postcodes[province][postcode].longitude)],
          zoom: 13
        });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        mapRef.current = map;
        const marker = L.marker([parseFloat(postcodes[province][postcode].latitude), parseFloat(postcodes[province][postcode].longitude)])
          .addTo(map);
        markerRef.current = marker;

      } else {
        mapRef.current.setView(
          [parseFloat(postcodes[province][postcode].latitude), parseFloat(postcodes[province][postcode].longitude)],
          13
        );
        if (markerRef.current) {
          markerRef.current.setLatLng([parseFloat(postcodes[province][postcode].latitude), parseFloat(postcodes[province][postcode].longitude)]);
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
