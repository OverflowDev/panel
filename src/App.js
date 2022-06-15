import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import Profile from './components/pages/Profile';

function App() {
  return (
    <div className="">

      <Router>
        <div className=''>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />

          </Routes>
        </div>

      </Router>

    </div>
  );
}

export default App;
