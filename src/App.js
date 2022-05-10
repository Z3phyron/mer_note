import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/Home/Home";


import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="App">
   

      <Routes>
        <Route path="/sign-up" exact element={<SignUp />} />
        <Route path="/sign-in" exact element={<SignIn />} />

        <Route path="/" exact element={<ProtectedRoutes />}>
          <Route path="/" exact element={<Home />} />
         
        </Route>
      </Routes>
    </div>
  );
}

export default App;
