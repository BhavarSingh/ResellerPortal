import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminApp from "./Components/AdminComponents/AdminApp";
import CustomerApp from "./Components/CustomerComponents/CustomerApp";
import ViewItem from "./Components/CustomerComponents/Components/ViewItemsPage/ViewItem";
import Auth from "./Components/AdminComponents/Components/Auth/Auth";

function App() {
  return (
    <Routes>
      <Route exact path="/auth" element={<Auth />} />
      <Route exact path="/admin" element={<AdminApp />} />
      <Route exact path="/shop" element={<CustomerApp />} />
      <Route exact path="/view/:id" element={<ViewItem />} />
    </Routes>
  );
}

export default App;
