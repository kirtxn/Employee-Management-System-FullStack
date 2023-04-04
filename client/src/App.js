import EmployeeList from "./components/EmployeeList/EmployeeList";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import RemoveEmployee from "./pages/RemoveEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
    
        <Router>
          <Navbar />
          <Routes>
            <Route path="/create-employee" element={<CreateEmployee />} />
            <Route path="/update-employee" element={<UpdateEmployee />} />
            <Route path="/remove-employee" element={<RemoveEmployee />} />
            <Route path="/" element={<EmployeeList />} />
          </Routes>
        </Router>
     
    </div>
  );
}

export default App;
