// import React from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
// const containerStyle = {
//   width: "300px",
//   height: "300px",
// };

// function GoogleMaps({ lat = 13.7575237, lng = 100.5317077 }) {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyAFWg9sVBiyu27dgrr75LOwOHOrFgufSSs",
//   });
//   const [map, setMap] = React.useState(null);
//   const center = {
//     lat,
//     lng,
//   };
//   //   useEffect(() => {
//   function onLoad(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);
//     setMap(map);
//   }
//   //   }, []);
//   function onUnmount(map) {
//     setMap(null);
//   }
//   console.log(map);
//   return (
//     <div>
//       {isLoaded ? (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={15}
//           onLoad={onLoad}
//           onUnmount={onUnmount}
//         >
//           <>❌</>
//         </GoogleMap>
//       ) : null}
//     </div>
//   );
// }
// export default GoogleMaps;

//
//
// ปักหมุด
// import React from "react";
// import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
// const GoogleMaps = () => {
//   // ตำแหน่งที่ต้องการปักหมุด
//   const center = { lat: 13.7575237, lng: 100.5317077 };
//   return (
//     <LoadScript
//       googleMapsApiKey="AIzaSyAFWg9sVBiyu27dgrr75LOwOHOrFgufSSs" // ใส่ API key ของคุณที่นี่
//     >
//       <GoogleMap
//         mapContainerStyle={{ width: "100%", height: "400px" }}
//         center={center}
//         zoom={15}
//       >
//         <Marker position={center} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };
// export default GoogleMaps;

//
//
//
//
// จากจุดไปอีกจุด
// import React, { useState, useEffect } from "react";
// import {
//   GoogleMap,
//   DirectionsService,
//   DirectionsRenderer,
//   LoadScript,
// } from "@react-google-maps/api";

// const GoogleMaps = ({
//   destination = { lat: 13.7575237, lng: 100.5317077 },
// }) => {
//   const [currentPosition, setCurrentPosition] = useState(null);
//   const [directions, setDirections] = useState(null);

//   useEffect(() => {
//     // ดึงตำแหน่งปัจจุบันของผู้ใช้
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         setCurrentPosition({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         });
//       });
//     }
//   }, []);

//   useEffect(() => {
//     if (currentPosition && destination) {
//       const directionsService = new window.google.maps.DirectionsService();
//       directionsService.route(
//         {
//           origin: currentPosition,
//           destination: destination,
//           travelMode: "WALKING", // หรือ 'WALKING', 'BICYCLING', 'TRANSIT'
//         },
//         (result, status) => {
//           if (status === "OK") {
//             setDirections(result);
//           }
//         }
//       );
//     }
//   }, [currentPosition, destination]);

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyAFWg9sVBiyu27dgrr75LOwOHOrFgufSSs">
//       <GoogleMap
//         mapContainerStyle={{ width: "100%", height: "400px" }}
//         center={currentPosition}
//         zoom={8}
//       >
//         {directions && <DirectionsRenderer directions={directions} />}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default GoogleMaps;

//
//
//
// ปักหมุด เองจาก map
// import React, { useState } from "react";
// import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
// const GoogleMaps = () => {
//   const [markers, setMarkers] = useState([]);
//   const handleMapClick = (event) => {
//     const newMarker = {
//       lat: event.latLng.lat(),
//       lng: event.latLng.lng(),
//     };
//     setMarkers([newMarker]);
//   };
//   console.log(markers);
//   return (
//     <LoadScript googleMapsApiKey="AIzaSyAFWg9sVBiyu27dgrr75LOwOHOrFgufSSs">
//       <GoogleMap
//         mapContainerStyle={{ width: "100%", height: "400px" }}
//         center={{ lat: 13.7575237, lng: 100.5317077 }}
//         zoom={15}
//         onClick={handleMapClick}
//       >
//         {/* แสดง Marker ที่ผู้ใช้เลือกปัก */}
//         {markers.map((marker, index) => (
//           <Marker key={index} position={marker} />
//         ))}
//       </GoogleMap>
//     </LoadScript>
//   );
// };
// export default GoogleMaps;

// function geocodeLatLng(geocoder, map, infowindow) {
//   const latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };

//   geocoder.geocode({ location: latlng }, (results, status) => {
//     if (status === "OK") {
//       if (results[0]) {
//         map.setZoom(11);
//         const marker = new google.maps.Marker({
//           position: latlng,
//           map: map,
//         });
//         infowindow.setContent(results[0].formatted_address);
//         infowindow.open(map, marker);
//       } else {
//         window.alert("No results found");
//       }
//     } else {
//       window.alert("Geocoder failed due to: " + status);
//     }
//   });
// }

import React, { useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const GoogleMaps = () => {
  const [markers, setMarkers] = useState([]);
  const [infoWindowContent, setInfoWindowContent] = useState("");
  const [map, setMap] = useState(null);

  // ฟังก์ชันนี้จะเรียกเมื่อคลิกที่แผนที่
  const handleMapClick = (event) => {
    // ปักหมุดที่ตำแหน่งที่คลิก
    setMarkers([
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
    ]);

    // ใช้ Geocoding API เพื่อดึงข้อมูลอำเภอจากพิกัดที่คลิก
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode(
      { location: { lat: event.latLng.lat(), lng: event.latLng.lng() } },
      (results, status) => {
        if (status === "OK") {
          if (results[0]) {
            // จะใช้ผลลัพธ์แรกที่ได้กลับมาเป็นอำเภอ
            const addressComponents = results[0].address_components;
            let district = "";
            for (let i = 0; i < addressComponents.length; i++) {
              if (
                addressComponents[i].types[0] === "administrative_area_level_2"
              ) {
                district = addressComponents[i].long_name;
                break;
              }
            }
            console.log("results", results);
            setInfoWindowContent(`อำเภอ: ${district}`);
          } else {
            setInfoWindowContent("ไม่พบข้อมูล");
          }
        } else {
          setInfoWindowContent("เกิดข้อผิดพลาดในการเรียกใช้ Geocoding API");
        }
      }
    );
  };
  console.log(infoWindowContent);

  return (
    <LoadScript googleMapsApiKey="AIzaSyAFWg9sVBiyu27dgrr75LOwOHOrFgufSSs">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={{ lat: 13.7563, lng: 100.5018 }}
        zoom={15}
        onClick={handleMapClick}
        onLoad={(map) => setMap(map)}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
        ))}

        {/* แสดงข้อมูลใน InfoWindow */}
        {/* {map && infoWindowContent && (
          <InfoWindow
            position={{ lat: map.center.lat(), lng: map.center.lng() }}
          >
            <div>{infoWindowContent}</div>
          </InfoWindow>
        )} */}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
