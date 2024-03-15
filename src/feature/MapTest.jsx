import React, { useState } from "react"
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api"

export const GoogleMaps = () => {
  const [markers, setMarkers] = useState([])
  const [infoWindowContent, setInfoWindowContent] = useState("")
  const [map, setMap] = useState(null)

  // ฟังก์ชันนี้จะเรียกเมื่อคลิกที่แผนที่
  const handleMapClick = (event) => {
    // ปักหมุดที่ตำแหน่งที่คลิก
    setMarkers([
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
    ])

    // ใช้ Geocoding API เพื่อดึงข้อมูลอำเภอจากพิกัดที่คลิก
    const geocoder = new window.google.maps.Geocoder()
    geocoder.geocode(
      { location: { lat: event.latLng.lat(), lng: event.latLng.lng() } },
      (results, status) => {
        if (status === "OK") {
          if (results[0]) {
            // จะใช้ผลลัพธ์แรกที่ได้กลับมาเป็นอำเภอ
            const addressComponents = results[0].address_components
            let district = ""
            for (let i = 0; i < addressComponents.length; i++) {
              if (
                addressComponents[i].types[0] === "administrative_area_level_2"
              ) {
                district = addressComponents[i].long_name
                break
              }
            }
            console.log("results", results)
            setInfoWindowContent(`อำเภอ: ${district}`)
          } else {
            setInfoWindowContent("ไม่พบข้อมูล")
          }
        } else {
          setInfoWindowContent("เกิดข้อผิดพลาดในการเรียกใช้ Geocoding API")
        }
      }
    )
  }
  console.log(infoWindowContent)

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
  )
}
