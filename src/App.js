import TrainDetails from './adminPages/TrainDetails'
import AddTrain from './adminPages/AddTrain'
import Signin from './adminPages/Signin'
import Signup from './adminPages/Signup'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import ForgetPassword from './adminPages/forgetPassword'
import SearchingTrain from './adminPages/searchingTrain'
import Home from './adminPages/Home'
import EditTrain from './adminPages/EditTrain'
import AddAdmin from './adminPages/AddAdmin'
import SingleTrainDetails from './Customer_pages/SingleTrainDetails'
import TrainSchedule from './Customer_pages/TrainSchedule'
import AddPassenger from './Customer_pages/AddPassenger'
import Payment from './Customer_pages/Payment'
import AddSchedule from './adminPages/AddSchedule'
import Links from './Customer_pages/Links'
import AboutUS from './adminPages/AboutUS'
import ContactUs from './adminPages/ContactUs'
import TermAndCondition from './adminPages/TermAndCondition'
import PrivacyPolicy from './adminPages/PrivacyPolicy'
import FAQSScreen from './adminPages/FAQSScreen'

import AdminFunctinality from './adminPages/AdminFunctinality'
import UserFunctionality from './Customer_pages/UserFunctionality'

function App() {
  const AuthorizeUser = () => {
    const loginStatus = sessionStorage['loginStatus']
    return loginStatus !== '1' ? <Home /> : <AdminFunctinality />
  }

  return (
    <div className='container-fluid'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthorizeUser />} />
          {}
          <Route path="/links" element={<Links />} />
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
          <Route path="/addSchedule" element={<AddSchedule />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/addAdmin" element={<AddAdmin />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/termsnconditions" element={<TermAndCondition />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/faqs" element={<FAQSScreen />} />
          <Route path="/adminfunctinality" element={<AdminFunctinality />} />
          <Route path="/userfunctinality" element={<UserFunctionality />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
