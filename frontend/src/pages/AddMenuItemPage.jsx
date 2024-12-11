import { useState } from "react";

const AddMenuItemPage = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    price: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="p-3 max-w-lg mx-auto mt-32 ">
      <h1 className="text-center text-3xl font-semibold my-7">Add food Item</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-3 rounded-lg"
          id="itemName"
          onChange={handleChange}
          value={formData.itemName}
          required
        />
        <input
          type="text"
          placeholder="Description"
          className="border p-3 rounded-lg"
          id="description"
          onChange={handleChange}
          value={formData.description}
          required
        />
        <input
          type="number"
          id="price"
          required
          className="py-3 text-center border border-gray-300 rounded-lg"
          onChange={handleChange}
          value={formData.price}
        />
        <button
          type="submit"
          className="p-3 bg-black text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Create
        </button>
      </form>
    </div>
  );
};

export default AddMenuItemPage;
