import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateMenuPage = () => {
  const [formData, setFormData] = useState({
    menuName: "",
    description: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("/api/menu/create", {
        method: "POST",
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
    <div className="p-3 max-w-lg mx-auto mt-32 ">
      <h1 className="text-center text-3xl font-semibold my-7">Create Food Menu</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-3 rounded-lg"
          id="menuName"
          onChange={handleChange}
          value={formData.menuName}
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
        <button
          type="submit"
          className="p-3 bg-black text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Create
        </button>
      </form>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default CreateMenuPage;
