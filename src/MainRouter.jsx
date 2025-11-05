import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import ListInventory from "./components/ìnventory/ListInventory";

function MainRouter() {
    return (
        <div>
            <Layout />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<Services />} />
                <Route path="/inventory" element={<ListInventory />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default MainRouter;