import React, { useState, useRef, useEffect } from 'react'
import { Map, View } from 'ol'
import { defaults as defaultInteractions } from 'ol/interaction.js'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import 'ol/ol.css'
import { useGeographic } from 'ol/proj'
import AppleMapsIcon from '../images/AppleMaps-icon.svg'
import GoogleMapsIcon from '../images/GoogleMaps-icon.svg'
import MapQuestIcon from '../images/MapQuest-icon.svg'
import WazeIcon from '../images/Waze-icon.webp'

function Slide03() {
  const [bgMap, setBgMap] = useState()
  const bgMapElement = useRef()
  const bgMapRef = useRef()

  useGeographic()

  bgMapRef.current = bgMap

  useEffect(() => {
    const initialBgMap = new Map({
      target: bgMapElement.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [-81.426352, 28.608072],
        zoom: 17.5,
        maxZoom: 18,
      }),
      interactions: defaultInteractions({
        doubleClickZoom: false,
        dragAndDrop: false,
        keyboardPan: false,
        keyboardZoom: false,
        mouseWheelZoom: false,
        pointer: false,
        select: false,
      }),
    })

    setBgMap(initialBgMap)
  }, [])

  return (
    <div id="come-visit" className="relative hero min-h-screen">
      <div style={{ zIndex: 10 }}>
        <div className="flex flex-row">
          <div className="flex w-1/2 min-w-[300px] m-6">
            <div className="card m-2 bg-base-100 shadow-xl min-h-[300px] justify-center">
              <div>
                <div className="card-title p-4 mt-8 mb-0 pb-0 justify-center">
                  COME VISIT
                </div>
                <div className="card-body text-xl text-center">
                  No matter where you join us from, we want you to be part of
                  the family and we look forward to connecting with you! Join us
                  live for Sunday Services Online at 1pm EST.
                </div>
                <div className="card-actions m-4 justify-center">
                  <a href={process.env.REACT_APP_STREAMING_LINK}><button className="btn btn-primary">Watch Live</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 min-w-[300px] m-6">
            <div className="card m-2 bg-base-100 shadow-xl min-h-[300px]">
              <div className="card-title p-4 mt-8 mb-0 pb-0 justify-center">
                DIRECTIONS
              </div>
              <div className="card-body">
                <div className="flex flex-wrap justify-center">
                  <a
                    href={process.env.REACT_APP_MAPS_APPLE_LINK}
                    className="m-4"
                  >
                    <div className="w-32 h-32">
                      <img src={AppleMapsIcon} alt="Apple Maps" />
                    </div>
                    <div className="text-center">Apple Maps</div>
                  </a>
                  <a
                    href={process.env.REACT_APP_MAPS_GOOGLE_LINK}
                    className="m-4"
                  >
                    <div className="w-32 h-32">
                      <img src={GoogleMapsIcon} alt="Google Maps" />
                    </div>
                    <div className="text-center">Google Maps</div>
                  </a>
                  <a
                    href={process.env.REACT_APP_MAPS_MAPQUEST_LINK}
                    className="m-4"
                  >
                    <div className="w-32 h-32">
                      <img src={MapQuestIcon} alt="Mapquest Maps" />
                    </div>
                    <div className="text-center">Mapquest</div>
                  </a>
                  <a
                    href={process.env.REACT_APP_MAPS_WAZE_LINK}
                    className="m-4"
                  >
                    <div className="w-32 h-32">
                      <img
                        src={WazeIcon}
                        alt="Waze Maps"
                        className="rounded-2xl"
                      />
                    </div>
                    <div className="text-center">Waze</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          zIndex: 5,
          height: '100vh',
          width: '100%',
          backgroundColor: '#00000033',
        }}
      ></div>
      <div
        style={{ height: '100vh', width: '100%', zIndex: 4 }}
        ref={bgMapElement}
        className="map-container"
      />
    </div>
  )
}

export default Slide03
