export const ImageRender = ({ restaurantImages }) => {
  return (
    <>
      {restaurantImages &&
        restaurantImages.slice(0, 5).map((image, index) => (
          <div
            key={index}
            className="max-w-[68px] h-[68px] rounded-md overflow-hidden border border-gray_primary hover:scale-110"
          >
            <img
              src={image.img}
              className="object-cover w-full h-full"
              alt={`Image ${index}`}
            />
          </div>
        ))}
      {restaurantImages && restaurantImages.length > 5 && (
        <div className="relative max-w-[68px] max-h-[68px] rounded-md overflow-hidden border border-gray_primary w-full  hover:scale-110">
          <div className="absolute inset-0 flex items-center justify-center text-white text-xl bg-black opacity-60">
            +{restaurantImages.length - 6}
          </div>
          <img
            src={restaurantImages[5].img}
            className="object-cover w-full h-full"
            alt={`Image ${5}`}
          />
        </div>
      )}
    </>
  )
}
