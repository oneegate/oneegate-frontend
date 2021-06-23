import { BrowserRouter as Router, Route } from "react-router-dom";
import "typeface-dm-sans";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import AdminPage from "./pages/admin";
import AddCareerPage from "./pages/add-career";
import LoginPage from "./pages/login";
import CareersPage from "./pages/careers";
import SingleCareerPage from "./pages/single-career";

export default function App() {
  let isLoggedIn = localStorage.getItem('userInfo')
  const setIsLoggedIn = (value) => {
    isLoggedIn = value
  }
  return (
    <Router>
      <main>
        <Route path="/contact" component={ContactPage} exact />
        <Route path='/careers/:id' component={SingleCareerPage} exact />
        <Route path='/careers' component={CareersPage} exact />
        <Route path='/admin-login' render={(props) => <LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} {...props} />} exact />
        <Route path='/admin-dashboard/create' render={(props) => <AddCareerPage isLoggedIn={isLoggedIn} {...props} />} exact />
        <Route path='/admin-dashboard' render={(props) => <AdminPage isLoggedIn={isLoggedIn} {...props} />} exact />
        <Route path="/" component={HomePage} exact />
      </main>
    </Router>
  );
}
