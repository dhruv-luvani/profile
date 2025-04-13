import { Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ErrorPage from "./components/pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/profile" element={<HomePage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
