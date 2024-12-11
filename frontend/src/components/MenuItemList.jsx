import { Frame, Frame1 } from "../assets";

const MenuItemList = () => {
  return (
    <div className="bg-[url('./assets/Rectangle116.png')] flex w-full">
      <div>
        <img src={Frame} alt="" />
      </div>
      <div className="flex-col mx-auto w-1/2 ">
        <h1 className="text-white text-3xl text-center mt-36">DESCRIPTION</h1>
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="text-white text-xl">MENUITEM NAME</h2>
              <p className="text-[#FFFFFFBF]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <button className="text-white bg-blue-700 w-16 h-8 rounded-md mt-2 font-bold">EDIT</button>
            </div>
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
