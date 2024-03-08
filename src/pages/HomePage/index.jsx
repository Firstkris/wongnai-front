import React, { useEffect, useState } from 'react';
import RestaurantPreview from '../../components/RestaurantPreview';

function HomePage() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/posts');
      const data = await response.json();
      setRestaurants(data);
    };

    fetchData();
  }, []);

  return (
    <div className='bg-'>
      <div className='flex justify-around'>
        <a href='/homepage'>
          <img src='../../icons/fork-and-knife.png' alt='' />
          <h2>ร้านอาหาร</h2>
        </a>
        <a href='/homepage'>
          <img src='../../icons/cup-of-drink.png' alt='' />
          <h2>กาแฟ/ของหวาน</h2>
        </a>
        <a href='/homepage'>
          <img src='../../icons/cocktail.png' alt='' />
          <h2>บาร์/cocktail</h2>
        </a>
      </div>
      <div className='bg-white m-auto flex flex-col justify-center align-middle w-70 border-2 rounded-lg'>
        <h1>แนะนำสำหรับคุณ</h1>
        <div className='flex gap-2'>
          <a href='/homepage'>ร้านยอดนิยม</a>
          <a href='/homepage'>ร้านใกล้ฉัน</a>
        </div>
        <div>
          <div>
            {restaurants.map((restaurant) => (
              <RestaurantPreview key={restaurants.id} post={restaurant} />
            ))}
          </div>
        </div>
        <button type='submit'>ดูทั้งหมด</button>
      </div>
    </div>
  );
}

export default HomePage;
