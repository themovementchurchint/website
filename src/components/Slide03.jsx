import React, { useState, useRef, useEffect } from 'react'
import ol, { Map, View } from 'ol'
import {defaults as defaultInteractions} from 'ol/interaction.js'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import 'ol/ol.css'
import {useGeographic} from 'ol/proj';


function Slide03() {
  const [ map, setMap ] = useState()
  const mapElement = useRef()
  const mapRef = useRef()


  useGeographic();

  mapRef.current = map

  useEffect(() => {
    const initialMap = new Map({
      target: mapElement.current,
      layers:[
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [-81.426352,28.608072],
        zoom: 18,
      }),
      interactions: defaultInteractions({
        doubleClickZoom :false,
        dragAndDrop: false,
        keyboardPan: false,
        keyboardZoom: false,
        mouseWheelZoom: false,
        pointer: false,
        select: false
    }),
    })

    setMap(initialMap)
  },[])
  return (
    <div id="come-visit" className="relative hero min-h-screen">
      <div style={{zIndex: 10}}> Testing</div>
      <div style={{height:'100vh',width:'100%', zIndex:4}} ref={mapElement} className="map-container" />
    </div>
  )
}

export default Slide03
