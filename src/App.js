import Register from "./components/navbar/Auth/Register";
import Login from "./components/navbar/Auth/Login";
import Navbar from "./components/navbar/Navbar";
import {
    Routes,
    Route,
} from 'react-router-dom';
import Banner from "./components/navbar/banner/Banner";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Banner />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
