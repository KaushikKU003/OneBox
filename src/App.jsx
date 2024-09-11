import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './Pages/login.jsx';
import Home from './Components/home.jsx';
import Dashboard from './Components/noContent.jsx'; // Example Page

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />

          {/* Home route as a layout */}
          <Route path="/home" element={<Home />}>
            {/* Nested routes inside Home layout */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Dashboard />} />
            <Route path="mail" element={<Dashboard />} />
            <Route path="send" element={<Dashboard />} />
            <Route path="stack" element={<Dashboard />} />
            <Route path="inbox" element={<Dashboard />} />
            <Route path="stats" element={<Dashboard />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
