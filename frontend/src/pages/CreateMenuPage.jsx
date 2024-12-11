const CreateMenuPage = () => {
  return (
    <div className="p-3 max-w-lg mx-auto mt-32 ">
      <h1 className="text-center text-3xl font-semibold my-7">Create Food Menu</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-3 rounded-lg"
          id="name"
          required
        />
        <input
          type="text"
          placeholder="Description"
          className="border p-3 rounded-lg"
          id="description"
          required
        />
        <button className="p-3 bg-black text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateMenuPage;
