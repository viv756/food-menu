import Menu from "../models/menu.model.js";
import MenuItem from "../models/menuitem.model.js";
import { errorHandler } from "../utils/error.js";

export const createMenuItem = async (req, res, next) => {
  const { itemName, description, price } = req.body;
  if (!itemName || !description || !price) {
    return next(errorHandler(400, "Please provide all required fields"));
  }
  try {
    const newMenuItem = new MenuItem({
      itemName,
      description,
      price,
    });
    await newMenuItem.save();

    const menu = await Menu.findById(req.params.id);
    if (!menu) {
      return next(errorHandler(404, "Menu not found"));
    }

    menu.menuitems.push(newMenuItem._id);
    await menu.save();

    res.status(200).json(menu);
  } catch (error) {
    next(error);
  }
};
