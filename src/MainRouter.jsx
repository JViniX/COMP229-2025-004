import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import ListInventory from "./components/ìnventory/ListInventory";
import AddInventory from "./components/ìnventory/AddInventory";
import EditInventory from "./components/ìnventory/EditInventory";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import PrivateRoute from "./components/auth/PrivateRoute";

function MainRouter() {
    return (
        <div>
            <Layout />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<Services />} />
                <Route path="/users/signin" element={<Signin />} />
                <Route path="/users/signup" element={<Signup />} />
                <Route path="/inventory/list" element={<ListInventory />} />
                <Route path="inventory/add" element={
                    <PrivateRoute>
                        <AddInventory />
                    </PrivateRoute>} />
                <Route path="inventory/edit/:id" element={
                    <PrivateRoute>
                        <EditInventory />
                    </PrivateRoute>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default MainRouter;