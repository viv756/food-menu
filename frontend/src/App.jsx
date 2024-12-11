import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CreateMenuPage from "./pages/CreateMenuPage";
import EditMenuItemPage from "./pages/EditMenuItemPage";
import AddMenuItemPage from "./pages/AddMenuItemPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menus" element={<MenuPage />} />
          <Route path="create-menu" element={<CreateMenuPage />} />
          <Route path="add-menu-item/:menuId" element={ <AddMenuItemPage/>} />
          <Route path="update-menu-item/:menuItemId" element={<EditMenuItemPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
