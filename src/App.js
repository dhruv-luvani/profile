import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./components/layout/PrivateRoute";
import Error404Page from "./pages/Error404Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute component={HomePage} />} />
      <Route path="*" element={<Error404Page />} />
      <Route path="/500" element={<Error404Page statusCode={500} message="Internal Server Error" />} />
    </Routes>
  );
}

export default App;
