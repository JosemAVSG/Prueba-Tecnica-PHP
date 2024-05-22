import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import Navbar from "./components/Navbar";
import DocumentForm from "./components/DocumentForm";
import EditForm from "./components/EditForm";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/createDocument" element={<DocumentForm/>} />
            <Route path="/editDocument/:id" element={<EditForm/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
