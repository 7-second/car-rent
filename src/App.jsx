import { useState } from "react";
import Add from "./pages/addcar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./profile.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route index element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add" element={<Add />} />

          {/* <Route path='/*' element={<NotFound />}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
