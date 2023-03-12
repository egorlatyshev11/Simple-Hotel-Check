import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "pages";
import { LoginPage } from "pages";
import "styles/globals.scss";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="login" replace />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
