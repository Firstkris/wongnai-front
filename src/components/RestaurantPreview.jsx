import { Link } from 'react-router-dom';

export default function RestaurantPreview({ restaurant}) {
console.log(restaurant)
  return (
    
    <div className='flex flex-col w-15 h-15 p-10' >
  {restaurant && (
        <>
      <h3>{restaurant?.restaurantName}</h3>
      <p>{restaurant?.subtitle}</p>
      <img src={restaurant?.profileImg}></img>
      <Link to={`/restaurants/${restaurant?.id}`}>Read more</Link>
      </>
      )}
    </div>
  );
}
