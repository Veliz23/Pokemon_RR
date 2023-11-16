import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useUserContext } from "./context/UserContext";
import Home from "./pages/Home";
import InfoPoke from "./pages/InfoPoke";
import Pokemon from "./pages/Pokemon";

export default function App() {

  const {user} =  useUserContext();
console.log(user);
  return(
    <>
    <div className="container-fluid bg-secondary">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={user ? <Pokemon /> : <Navigate to="/"/> }/>
        <Route path="/pokemon/:id" element={user ?  <InfoPoke /> : <Navigate to="/"/>} />
      </Routes>
      <Footer />
    </div>
    </>
  )
};
