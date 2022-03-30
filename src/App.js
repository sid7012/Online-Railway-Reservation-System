
import TrainDetails from './adminPages/TrainDetails'
import AddTrain from './adminPages/AddTrain'
import Signin from './adminPages/Signin'
import Signup from './adminPages/Signup'
import { BrowserRouter,Routes, Route,Link } from 'react-router-dom'
import Header from './components/header'

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/addTrain" element={<AddTrain/>} />
        <Route path="/trainDetails" element={<TrainDetails/>} />
        <Route path="/header" element={<Header/>} />
      </Routes>
      </BrowserRouter>
  <ToastContainer theme="colored"/>
    </div>
  );
}

export default App;
