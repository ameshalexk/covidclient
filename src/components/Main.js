import React, { useEffect, useState } from "react";
import axios from "axios";



const Portfolio = (props) => {

    const [purchases, setPurchases] = useState([]);


    // populate purchase data
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/Coronavirus_2019_nCoV_Cases/FeatureServer/1/query?where=1%3D1&outFields=*&outSR=4326&f=json"
                );
                const data = await response.data;
                setPurchases(data);
                // console.log(data);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);
    const {features : lol} = purchases;   

    

    return (

            <div className="portfoliocontainerchild2">
                <h1 > Map :  {console.log(lol)}</h1>
                


            </div>

    );
};

export default Portfolio;