import{
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import BuyersSignup from './components/BuyersSignup';
import SellersSignup from './components/SellersSignup';
import Login from './components/Login';
import Sellerspage from './components/Sellerspage';



function App() {
  // return(
  //   <>
  //   <Router>
  //     <switch>
  //       <Route exact path="/" component={LandingPage}/>
  //       <Route exact path="/" component={SignUp}/>
  //       <Redirect to="/"/>
  //     </switch>
  //   </Router>
  //   </>
  // )
  return (
    <div>
    <LandingPage />
    {/* <SignUp /> */}
    {/* <BuyersSignup /> */}
    {/* <SellersSignup /> */}
    {/* <Login /> */}
    {/* <Sellerspage /> */}

  </div>
  )
 
}

export default App;
