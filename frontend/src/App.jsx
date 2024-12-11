import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CreateMenuPage from "./pages/CreateMenuPage";
import EditMenuItemPage from "./pages/EditMenuItemPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menus" element={<MenuPage />} />
          <Route path="create-menu" element={<CreateMenuPage />} />
          <Route path="add-menu-item/:menuId" />
          <Route path="update-menu-item/:menuItemId" element={<EditMenuItemPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
