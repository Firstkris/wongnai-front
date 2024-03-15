import { useEffect } from "react"
import {
  GoogleMap,
  Marker,
  LoadScript,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api"
import { useState } from "react"

export const MiniMapGoogle = ({ lat, lng, restaurants }) => {
  // ตำแหน่งที่ต้องการปักหมุด
  const center = { lat: parseFloat(lat), lng: parseFloat(lng) }
  const [selectedMarker, setSelectedMarker] = useState(null)

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAFWg9sVBiyu27dgrr75LOwOHOrFgufSSs",
  })

  const handleMarkerClick = (restaurant) => {
    setSelectedMarker(restaurant)
  }
  const handleCloseInfoWindow = () => {
    setSelectedMarker(null)
  }
  const defaultMapOptions = {
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    keyboardShortcuts: false,
  }
  return lat && lng ? (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
          center={center}
          zoom={15}
          //options={defaultMapOptions}
        >
          <Marker position={center} />
          {restaurants &&
            restaurants.map((marker, index) => (
              <Marker
                key={index}
                position={{
                  lat: parseFloat(marker.lat),
                  lng: parseFloat(marker.lng),
                }}
                title={marker.restaurantName}
                onClick={() => handleMarkerClick(marker)}
              />
            ))}
          {selectedMarker && (
            <InfoWindow
              position={{
                lat: parseFloat(selectedMarker.lat),
                lng: parseFloat(selectedMarker.lng),
              }}
              onCloseClick={handleCloseInfoWindow}
            >
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-lg object-contain overflow-hidden">
                  <img
                    src={selectedMarker?.restaurantImages[0]?.img}
                    className="h-full w-full"
                  />
                </div>

                <div className="flex flex-col gap-0.5">
                  <h3 className="font-semibold">
                    {selectedMarker.restaurantName}
                  </h3>
                  <p>{selectedMarker.subtitle}</p>
                  <p>โทร. {selectedMarker.mobile || "-"} </p>
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      ) : null}
    </>
  ) : null
}
