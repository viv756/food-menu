import { Link } from "react-router-dom";
import { Frame, Frame1 } from "../assets";

const MenuItemList = ({ menu }) => {
  return (
    <div className="bg-[url('./assets/Rectangle116.png')] flex w-full">
      <div>
        <img src={Frame} alt="" />
      </div>
      <div className="flex-col mx-auto w-1/2 ">
        <h1 className="text-white text-3xl text-center mt-36">{menu?.description}</h1>

        <button className="p-3 bg-blue-700 rounded-md text-white">
          <Link to={`/add-menu-item/${menu?._id}`}>ADD MENU ITEM</Link>
        </button>
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-6">
            {menu?.menuitems?.map((menuItem) => (
              <div key={menuItem._id}>
                <h2 className="text-white text-2xl">{menuItem.itemName}.................{menuItem.price }</h2>
                <p className="text-[#FFFFFFBF] mt-3">{menuItem.description}</p>
                <button className="text-white bg-blue-700 w-16 h-8 rounded-md mt-2 font-bold">
                  <Link to={`/update-menu-item/${menuItem._id}`}>
                    EDIT
                 </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <img src={Frame1} alt="" />
      </div>
    </div>
  );
};

export default MenuItemList;
