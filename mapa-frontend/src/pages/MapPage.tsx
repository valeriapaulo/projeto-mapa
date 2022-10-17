import {LoadScript, GoogleMap} from "@react-google-maps/api";
import "./MapPage.css"

const center = {lat: -22.9101744, lng: -47.0630889}

export default function MapPage() {
    return <LoadScript googleMapsApiKey="AIzaSyDfgL6lQDV6HJQeCuBG52Y6ZiFfBTukVhA">

        <div className="map">
            <GoogleMap 
             center={center}
             zoom={15} 
             mapContainerStyle={{ width: "100%", height: "100% " }} 
            />
        </div>

    </LoadScript>;
}