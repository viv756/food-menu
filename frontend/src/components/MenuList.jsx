import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MenuList = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("/api/menu/get");
        const data = await res.json();
        setMenus(data);
        console.log(menus);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMenu();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode:true
  };
  return (
    <div className="bg-[url('./assets/Rectangle107.png')] w-full h-24 bg-cover bg-center">
      <div className="max-w-xl mx-auto">
        <div className="">
          {menus.length > 0 ? (
            <Slider {...settings}>
              {menus.map((menu, index) => (
                <div className="">
                  <button
                    key={index}
                    className="bg-black p-4 sm:min-w-32 text-white mt-3 rounded-md">
                    {menu.menuName}
                  </button>
                </div>
              ))}
            </Slider>
          ) : (
            <p>No Menus Available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuList;
