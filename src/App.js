
import TrainDetails from './adminPages/TrainDetails'
import AddTrain from './adminPages/AddTrain'
import Signin from './adminPages/Signin'
import Signup from './adminPages/Signup'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify';
import ForgetPassword from './adminPages/forgetPassword'
import SearchingTrain from './adminPages/searchingTrain'
import Home from './adminPages/Home'
import EditTrain from './adminPages/EditTrain'
import AddAdmin from './adminPages/AddAdmin'
import SingleTrainDetails from './Customer_pages/SingleTrainDetails'
import TrainSchedule from './Customer_pages/TrainSchedule'
import AddPassenger from './Customer_pages/AddPassenger'

function App() {
  const AuthorizeUser = () => {
    const loginStatus = sessionStorage['loginStatus']
    return loginStatus == '1' ? <Home /> : <Signin />
    // if (loginStatus == '1') {
    //   return <Home />
    // } else {
    //   return <Signin />
    // }
  }
  return (
    <div className='container-fluid'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthorizeUser />} />
          <Route path="/home" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addTrain" element={<AddTrain />} />
          <Route path="/trainDetails" element={<TrainDetails />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/searchingTrain" element={<SearchingTrain />} />
          <Route path="/editTrain" element={<EditTrain />} />
          <Route path="/singleTrainDetails" element={<SingleTrainDetails />} />
          <Route path="/trainSchedule" element={<TrainSchedule />} />
          <Route path="/addPassenger" element={<AddPassenger />} />
          <Route path="/addAdmin" element={<AddAdmin />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
