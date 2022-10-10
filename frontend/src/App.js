import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages and Components
import Home from './pages/home.js';
import Workout from './pages/Workout.js';
import Navbar from './components/Navbar.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
            <Route
              path="/workout"
              element={<Workout/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
