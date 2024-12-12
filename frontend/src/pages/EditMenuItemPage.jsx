import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditMenuItemPage = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const { menuItemId } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchMenuItem = async () => {
      const res = await fetch(`/api/menu-item/get/${menuItemId}`);
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
      }
      setFormData(data);
    };

    fetchMenuItem();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const res = await fetch(`/api/menu-item/update/${menuItemId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
      }
      navigate('/menus')
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto mt-32 border-2 border-white rounded-md ">
      <h1 className="text-center text-3xl font-semibold my-7 text-white">Edit food Item</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          className="p-3 bg-blue-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default EditMenuItemPage;
