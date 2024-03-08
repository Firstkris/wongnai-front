import { Link } from 'react-router-dom';

export default function RestaurantPreview({ restaurant }) {
  return (
    <div>
      <h3>{restaurant.restaurantName}</h3>
      <p>{restaurant.subTitle}</p>
      <img src={restaurant.imageProfile}></img>
      <Link to={`/restaurant/${restaurant.id}`}>Read more</Link>
    </div>
  );
}
