import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import {
  Login,
  Signup,
  Home,
  ProtectedRoute,
  CreateCourse,
} from "./components/index";

function App() {
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/createCourse"
            element={
              <ProtectedRoute>
                <CreateCourse />
              </ProtectedRoute>
            }
          />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
