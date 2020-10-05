import React, { useEffect, useState } from "react";
import axios from "axios";
import Map from "./Map.js";

const Portfolio = (props) => {
  const [purchases, setPurchases] = useState({});
  // populate purchase data
  useEffect(() => {
    (async () => {
      try {
        // const response = await axios.get(
        //   "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/Coronavirus_2019_nCoV_Cases/FeatureServer/1/query?where=1%3D1&outFields=*&outSR=4326&f=json"
        // );
        const response = await axios.get(
          "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?where=OBJECTID%3E0&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token="
        );
        const data = await response.data;
        setPurchases(data);
        // console.log(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (

    <div className="maincontainer">
      <div>
        </div>
        {props.isLoggedIn ? <Map purchases={purchases}> </Map> : <div> Please log In</div> }

    </div>
  );
};

export default Portfolio;
