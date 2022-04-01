
import TrainDetails from './adminPages/TrainDetails'
import AddTrain from './adminPages/AddTrain'
import Signin from './adminPages/Signin'
import Signup from './adminPages/Signup'
import { BrowserRouter,Routes, Route,Link } from 'react-router-dom'
import Header from './components/header'
import { ToastContainer } from 'react-toastify';
import ForgetPassword from './adminPages/forgetPassword'
import SearchingTrain from './adminPages/searchingTrain'
import Home from './adminPages/Home'
import EditTrain from './adminPages/EditTrain' 

function App() {
  return (
    <div className='container-fluid'>
         <Header/>
      <BrowserRouter>
   
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/addTrain" element={<AddTrain/>} />
        <Route path="/trainDetails" element={<TrainDetails/>} />
        <Route path="/forgetPassword" element={<ForgetPassword/>} />
        <Route path="/searchingTrain" element={<SearchingTrain/>} />
        <Route path="/editTrain" element={<EditTrain/>} />
      </Routes>
      </BrowserRouter>
  <ToastContainer theme="colored"/>
    </div>
  );
}

export default App;
