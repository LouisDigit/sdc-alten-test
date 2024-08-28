import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "@/presentation/pages/HomePage";
function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
