import React, { useState } from "react";
import ReactMapGl, {
  Marker,
  ScaleControl,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
  Popup
} from "react-map-gl";

const navStyle = {
  position: "absolute",
  top: 72,
  left: 0,
  padding: "10px",
};

const fullscreenControlStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px",
};

const geolocateStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px",
};

const scaleControlStyle = {
  position: 'absolute',
  bottom: 36,
  left: 0,
  padding: '10px'
};

const Map = (props) => {
  const covidData = props.purchases;

  const [viewport, setViewport] = useState({
    latitude: 39.5,
    longitude: -98.35,
    zoom: 3,
    width: "100vw",
    height: "100vh",
  });

  const [selectedPark, setSelectedPark] = useState(null);

  return (
    <div>
      <ReactMapGl mapStyle="mapbox://styles/mapbox/dark-v9" {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {setViewport(viewport);}}>
        <div style={scaleControlStyle}>
          <ScaleControl />
        </div>
        <div style={navStyle}>
          <NavigationControl />
        </div>
        <div style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
        <div style={geolocateStyle}>
          <GeolocateControl />
        </div>
        
        {Object.entries(covidData).map((el, i) => {
          if (i === 6) {
            return el.map((e, j) => {
              if (j === 1) {
                return e.map((f, l) => {
                  return Object.entries(f).map((z, y) => {
                    if (y === 0) {
                      return z.map((t, o) => {
                        if (o === 1 && t.Lat != null && t.Long_ != null) {
                          return (
                            <Marker key={t.Deaths} latitude={t.Lat} longitude={t.Long_}>
                              <div onClick={e => {e.preventDefault();
                               setSelectedPark(t);}}>
                                {t.Active > 1000 ? <div>🔴</div> : <div>🟢</div>}
                              </div>                          
                            </Marker>                            
                          );
                        }
                      });
                    }
                  });
                });
              }
            });
          }
        })
        }
        {selectedPark ? (<Popup latitude={selectedPark.Lat} longitude={selectedPark.Long_} onClose={() => {
          setSelectedPark(null);}} >
            <div>
              <h2>{`(${selectedPark.Province_State?selectedPark.Province_State : 'Data Not Available'})`}</h2>
              <div style={{
                color: `rgb(${selectedPark.Deaths>255? 255 : 255},${selectedPark.Deaths>255? 0 : 255},${selectedPark.Deaths>255? 0 : 255})`
                }}>📍{selectedPark.Deaths}
                </div>
              <p> 
                Confirmed Cases : {selectedPark.Confirmed}
                </p>
              <p> 
                Active Cases : {selectedPark.Active}
                </p>
            </div>
          </Popup>
        ) : null}
        
      </ReactMapGl>
    </div>
  );
};
export default Map;
