import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Routes,
  Route
} from "react-router-dom";
import SearchPage from './pages/Search';
import ResultsPage from './pages/Results';
import { useState } from 'react';

function App() {
  const [results, setResults] = useState([]);
  return (
        <Routes>
          <Route path="/" element={<SearchPage setResults={setResults} />}/>
          <Route path="/results" element={<ResultsPage results={results} />}/>
      </Routes>
  );
}

export default App;
