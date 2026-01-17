import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='checkout' element={<div>Test Checkout routing</div>} />
      </Routes>
    </div>
  );
}

export default App;