import { useEffect,useState } from "react";
import cogoToast from 'cogo-toast';
const useGeoLocation = () => {
    
 const[location,setLocation]=useState({
     loaded:false,
     coordinates:{lat:"",lng:""}
 });
 const geoSuccess = (location) => {
    setLocation({
        loaded:true,
        coordinates:{lat:location.coords.latitude,lng:location.coords.longitude}
    });
    console.log("location in",{lat:location.coords.latitude,lng:location.coords.longitude});
    cogoToast.success('Location Found',{position:'top-center'});
    };

    const geoError = (err) => {
        setLocation({
            loaded:true,
            err,
            
        })
        cogoToast.error('User denied GeoLocation, try again',{position:'top-center'});

    console.log(err.message);
    };
 useEffect(()=>{
        const geo = navigator.geolocation;
        if (!geo) {
            geoError(
                {
                    code:0,
                    message:"Geolocation is not supported"
                }
            )
           
        } 
        geo.getCurrentPosition(geoSuccess, geoError);
    },[]);

    };
export default useGeoLocation;
