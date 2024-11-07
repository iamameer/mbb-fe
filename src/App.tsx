import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";

import List from "./pages/Book/List";
import Details from "./pages/Book/Details";
import Create from "./pages/Book/Create";
import Edit from './pages/Book/Edit';

function App() {

  return (
    <Router>

      <Navbar/>

      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/view" element={<Details />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>

    </Router>
  )
}

export default App
