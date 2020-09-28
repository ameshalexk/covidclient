import React, { useState } from "react";
// import ReactDOM from 'react-dom';
// import mapboxgl from 'mapbox-gl';
import ReactMapGl, { Marker } from "react-map-gl";

const Map = (props) => {
  // console.log(props,false);
  const [viewport, setViewport] = useState({
    latitude: 31.054487,
    longitude: -97.563461,
    zoom: 10,
    width: "50vw",
    height: "50vh",
  });

  return (
    <div>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        
        
          {Object.entries(props.purchases).map((dater, i) => {
            if (i === 6) {
              return dater[1].map((date, j) => {
                Object.entries(date).map((dat, k) => {
                  if (k === 1) {
                    return dat.map((da, l) => {
                      if (l === 1) {
                        return (
                          <Marker
                            key={da.x}
                            latitude={da.y}
                            longitude={da.x}
                          >
                            <div>SKATE</div> {console.log(da.x)}
                          </Marker>
                        );
                      }
                    });
                  }
                });
                
              });
            }
          })}
        
      </ReactMapGl>
      {/* <div className='sidebarStyle'>
          <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
        </div>
        <div ref={el => this.mapContainer = el} className='mapContainer' /> */}
    </div>
  );
};
export default Map;




// import React, { useState } from "react";
// // import ReactDOM from 'react-dom';
// // import mapboxgl from 'mapbox-gl';
// import ReactMapGl, { Marker } from "react-map-gl";

// const Map = (props) => {
//   // console.log(props,false);
//   const [viewport, setViewport] = useState({
//     latitude: 45.4211,
//     longitude: -75.6983,
//     zoom: 10,
//     width: "50vw",
//     height: "50vh",
//   });

//   // const map = new mapboxgl.Map({
//   //   container: this.mapContainer,
//   //   style: 'mapbox://styles/mapbox/streets-v11',
//   //   center: [this.state.lng, this.state.lat],
//   //   zoom: this.state.zoom
//   // });

//   // map.on('move', () => {
//   //   this.setState({
//   //     lng: map.getCenter().lng.toFixed(4),
//   //     lat: map.getCenter().lat.toFixed(4),
//   //     zoom: map.getZoom().toFixed(2)
//   //   });
//   // });

//   return (
//     <div>
//       <ReactMapGl
//         {...viewport}
//         mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
//         onViewportChange={(viewport) => {
//           setViewport(viewport);
//         }}
//       >
        
        
//           {Object.entries(props.purchases).map((dater, i) => {
//             if (i === 6) {
//               return dater[1].map((date, j) => {
//                 Object.entries(date).map((dat, k) => {
//                   if (k === 1) {
//                     return dat.map((da, l) => {
//                       if (l === 1) {
//                         return (
//                           <Marker
//                             key={da.x}
//                             longitude={da.x[0]}
//                             latitude={da.y[0]}
//                           >
//                             <div>SKATE</div> {console.log(da.x)}
//                           </Marker>
//                         );
//                       }
//                     });
//                   }
//                 });
                
//               });
//             }
//           })}
        
//       </ReactMapGl>
//       {/* <div className='sidebarStyle'>
//           <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
//         </div>
//         <div ref={el => this.mapContainer = el} className='mapContainer' /> */}
//     </div>
//   );
// };
// export default Map;
