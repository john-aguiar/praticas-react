import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterCar } from "./pages/RegisterCar";
import { ShowData } from "./pages/ShowData";
import { TodosList } from "./pages/TodoList";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterCar />} />
        <Route path="/exibir" element={<ShowData />} />
        <Route path="/todos" element={<TodosList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
