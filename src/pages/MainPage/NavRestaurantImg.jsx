import React from "react";

export default function NavRestaurantImg() {
  const array = [
    {
      img: "https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-6/289762927_105335675559492_5886055562069936241_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGuw9j3MhyHcE2hBzcNY3aiqFR65YRcnmWoVHrlhFyeZeqOXheYKUW32nwpA6SEsd5wmIUw-x_duRF8niANzJuN&_nc_ohc=Efdo3r2IPZ0AX8M2L63&_nc_ht=scontent.fbkk7-2.fna&oh=00_AfCvnhH14kPYgUmIEpOn8WyKdxITjM6o2d4gdLrLd7_RMw&oe=65EC6F58",
    },
    {
      img: "https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-6/289762927_105335675559492_5886055562069936241_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGuw9j3MhyHcE2hBzcNY3aiqFR65YRcnmWoVHrlhFyeZeqOXheYKUW32nwpA6SEsd5wmIUw-x_duRF8niANzJuN&_nc_ohc=Efdo3r2IPZ0AX8M2L63&_nc_ht=scontent.fbkk7-2.fna&oh=00_AfCvnhH14kPYgUmIEpOn8WyKdxITjM6o2d4gdLrLd7_RMw&oe=65EC6F58",
    },
    {
      img: "https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-6/289599198_105335412226185_6402096554843999236_n.png?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGK9m9qQu0JM_FAlO621eIKDGxh13HrMKcMbGHXceswp-BmdzlpX1_J6WboyQkAJsmRvPdL4aI9L-Ubv-eIkTBS&_nc_ohc=oBa3xh4Ab-oAX9_9bmN&_nc_ht=scontent.fbkk7-2.fna&oh=00_AfAFvc-9FP-K9W9-_Ajo68wuoNNJh9FrJ3Sbg4YBjbDV3w&oe=65ED7B70",
    },
    {
      img: "https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-6/289762927_105335675559492_5886055562069936241_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGuw9j3MhyHcE2hBzcNY3aiqFR65YRcnmWoVHrlhFyeZeqOXheYKUW32nwpA6SEsd5wmIUw-x_duRF8niANzJuN&_nc_ohc=Efdo3r2IPZ0AX8M2L63&_nc_ht=scontent.fbkk7-2.fna&oh=00_AfCvnhH14kPYgUmIEpOn8WyKdxITjM6o2d4gdLrLd7_RMw&oe=65EC6F58",
    },
    {
      img: "https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-6/289762927_105335675559492_5886055562069936241_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGuw9j3MhyHcE2hBzcNY3aiqFR65YRcnmWoVHrlhFyeZeqOXheYKUW32nwpA6SEsd5wmIUw-x_duRF8niANzJuN&_nc_ohc=Efdo3r2IPZ0AX8M2L63&_nc_ht=scontent.fbkk7-2.fna&oh=00_AfCvnhH14kPYgUmIEpOn8WyKdxITjM6o2d4gdLrLd7_RMw&oe=65EC6F58",
    },
    {
      img: "https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-6/289599198_105335412226185_6402096554843999236_n.png?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGK9m9qQu0JM_FAlO621eIKDGxh13HrMKcMbGHXceswp-BmdzlpX1_J6WboyQkAJsmRvPdL4aI9L-Ubv-eIkTBS&_nc_ohc=oBa3xh4Ab-oAX9_9bmN&_nc_ht=scontent.fbkk7-2.fna&oh=00_AfAFvc-9FP-K9W9-_Ajo68wuoNNJh9FrJ3Sbg4YBjbDV3w&oe=65ED7B70",
    },
    {
      img: "https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-6/289762927_105335675559492_5886055562069936241_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGuw9j3MhyHcE2hBzcNY3aiqFR65YRcnmWoVHrlhFyeZeqOXheYKUW32nwpA6SEsd5wmIUw-x_duRF8niANzJuN&_nc_ohc=Efdo3r2IPZ0AX8M2L63&_nc_ht=scontent.fbkk7-2.fna&oh=00_AfCvnhH14kPYgUmIEpOn8WyKdxITjM6o2d4gdLrLd7_RMw&oe=65EC6F58",
    },
    {
      img: "https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-6/289762927_105335675559492_5886055562069936241_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGuw9j3MhyHcE2hBzcNY3aiqFR65YRcnmWoVHrlhFyeZeqOXheYKUW32nwpA6SEsd5wmIUw-x_duRF8niANzJuN&_nc_ohc=Efdo3r2IPZ0AX8M2L63&_nc_ht=scontent.fbkk7-2.fna&oh=00_AfCvnhH14kPYgUmIEpOn8WyKdxITjM6o2d4gdLrLd7_RMw&oe=65EC6F58",
    },
    {
      img: "https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-6/289599198_105335412226185_6402096554843999236_n.png?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGK9m9qQu0JM_FAlO621eIKDGxh13HrMKcMbGHXceswp-BmdzlpX1_J6WboyQkAJsmRvPdL4aI9L-Ubv-eIkTBS&_nc_ohc=oBa3xh4Ab-oAX9_9bmN&_nc_ht=scontent.fbkk7-2.fna&oh=00_AfAFvc-9FP-K9W9-_Ajo68wuoNNJh9FrJ3Sbg4YBjbDV3w&oe=65ED7B70",
    },
  ];

  return (
    <div className=" flex justify-center bg-red-500 ">
      <img className="aspect-video object-cover h-[250px]" src={array[0].img} />
      {array.slice(1, 3).map((a) => (
        <img
          className=" aspect-square object-cover border  h-[250px] "
          src={a.img}
          alt="restaurant Image"
        />
      ))}
      {array.length >= 4 && array.length <= 7 ? (
        <div className="relative">
          {array.slice(3, 4).map((a) => (
            <div>
              <img
                className=" aspect-square object-cover border h-[250px] "
                src={a.img}
                alt="restaurant Image"
              />
              <div className="absolute top-0 flex justify-center items-center bg-black opacity-70 aspect-video h-[250px] w-[250px] text-white text-4xl cursor-pointer ">
                <div>+{array.length - 4}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative grid grid-cols-2 ">
          {array.slice(3, 7).map((a) => (
            <div>
              <img
                className=" aspect-video object-cover border h-[125px] "
                src={a.img}
                alt="restaurant Image"
              />
            </div>
          ))}
          <div className="absolute right-0 bottom-0 flex justify-center items-center bg-black opacity-70 aspect-video w-1/2 text-white text-4xl cursor-pointer ">
            <div>+{array.length - 7}</div>
          </div>
        </div>
      )}
    </div>
  );
}
