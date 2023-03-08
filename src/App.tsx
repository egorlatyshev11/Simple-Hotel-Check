import s from "./app.module.scss";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "pages";
import { LoginPage } from "pages";
import { ExamplePage } from "pages";
import "styles/globals.scss";
import { Input } from "components";

function App() {
  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/example" element={<ExamplePage />} />
    </Routes>
  );
}

export default App;
