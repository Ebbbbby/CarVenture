import Register from "./components/navbar/Auth/Register";
import Login from "./components/navbar/Auth/Login";
import Navbar from "./components/navbar/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,

} from 'react-router-dom';
import Banner from "./components/navbar/banner/Banner";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Navbar />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
        <Banner/>
      </div>

    </Router>
  );
}

export default App;
