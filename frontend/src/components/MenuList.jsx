import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuItemList from "./MenuItemList";

const MenuList = () => {
  const [menus, setMenus] = useState([]);
  const [menu, setMenu] = useState(null);
console.log(menus);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("/api/menu/get");
        const data = await res.json();
        setMenus(data);
        setMenu(data[0])
        console.log(menus);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMenu();
  }, []);

  const handleClick = async (id) => {
    const res = await fetch(`/api/menu/get/${id}`);
    const data = await res.json();
    setMenu(data)
    console.log(menu);
    
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
  };
  return (
    <div>
      <div className="bg-[url('./assets/Rectangle107.png')] w-full h-24 bg-cover bg-center">
        <div className="max-w-xl mx-auto">
          <div className="">
            {menus.length > 0 ? (
              <Slider {...settings}>
                {menus.map((menu, index) => (
                  <div className="">
                    <button
                      onClick={() => {
                        handleClick(menu._id);
                      }}
                      key={index}
                      className="bg-black p-4 sm:min-w-32 text-white mt-3 rounded-md uppercase">
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
      <MenuItemList menu={ menu} />
    </div>
  );
};

export default MenuList;
