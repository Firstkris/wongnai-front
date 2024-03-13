import { useEffect } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  useJsApiLoader,
} from "@react-google-maps/api";
const containerStyle = {
  width: "300px",
  height: "300px",
};
export const MiniMapGoogle = ({ lat, lng }) => {
  // ตำแหน่งที่ต้องการปักหมุด
  const center = { lat: parseFloat(lat), lng: parseFloat(lng) };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAFWg9sVBiyu27dgrr75LOwOHOrFgufSSs",
  });

  return lat && lng ? (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
            cursor: "pointer",
            zIndex: 0,
          }}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      ) : null}
    </>
  ) : null;
};
