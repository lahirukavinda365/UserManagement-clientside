import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/signUp" element={<SignUp/>} />
      <Route path="/signIn" element={<SignIn/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/landingPage" element={<LandingPage />} />
      
    </Routes>
  );
}

export default App;
