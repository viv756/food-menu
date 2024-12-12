import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    menuName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    menuitems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem",
      },
    ],
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menu", menuSchema);
export default Menu;
