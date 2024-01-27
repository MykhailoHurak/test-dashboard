import { Routes, Route } from "react-router-dom";

import { SharedLayout } from "./components/SharedLayout";

import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Customers } from "./pages/Customers";
import { Income } from "./pages/Income";
import { Promote } from "./pages/Promote";
import { Help } from "./pages/Help";
// import NotFound from "path/to/pages/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/income" element={<Income />} />
                <Route path="/promote" element={<Promote />} />
                <Route path="/help" element={<Help />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
        </Routes>
        );
}

export default App;
