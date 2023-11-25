import { TodoApp, Login } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<TodoApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
