import Menu from "../models/menu.model.js";
import { errorHandler } from "../utils/error.js";

export const createMenu = async (req, res, next) => {
  try {
    const { menuName, description } = req.body;
    if (!menuName || !description) {
      return next(errorHandler(400, "Please provide all required fields"));
    }

    const newMenu = new Menu({
      menuName,
      description,
    });

    await newMenu.save();
    res.status(200).json("Menu created successfully");
  } catch (error) {
    next(error);
  }
};

export const getMenus = async (req, res, next) => {
  try {
    const menus = await Menu.find().populate({
      path: "menuitems",
      options:{sort:{updatedAt:-1}},
    })
    res.status(200).json(menus)
  } catch (error) {
    next(error)
  }
}

export const getMenu = async (req, res, next) => {
  try {
    const menu = await Menu.findById(req.params.id).populate({
      path: "menuitems",
      options:{sort:{updatedAt:-1}},
    })
    res.status(200).json(menu)
  } catch (error) {
    next(error)
  }
}