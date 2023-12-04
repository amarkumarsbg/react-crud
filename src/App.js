import { Routes, Route } from "react-router-dom";
import ListUser from "./components/users/ListUser";
import CreateUser from "./components/users/CreateUser";
import EditUser from "./components/users/EditUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<ListUser />} />
        <Route path="/users/create" element={<CreateUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
