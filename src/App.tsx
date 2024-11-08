import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';

import Navbar from "./components/Navbar";

import List from "./pages/Book/List";
import Details from "./pages/Book/Details";
import Create from "./pages/Book/Create";
import Edit from './pages/Book/Edit';


// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-explicit-any
export const CommonContext = createContext<any | null>(null);

function App() {
  const [showAddButton, setShowAddButton] = useState(true);

  return (  
    
    <CommonContext.Provider value={{ showAddButton, setShowAddButton }}>
      <Router>
        
        <Navbar/>

        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/view" element={<Details />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>

      </Router>
    </CommonContext.Provider>

  )
}

export default App
