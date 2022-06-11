import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import ProjectDetails from "./components/Pages/ProjectDetails/ProjectDetails";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/projects/:id"
                    element={<ProjectDetails />}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
