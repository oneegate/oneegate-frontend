import { BrowserRouter as Router, Route } from "react-router-dom";
import "typeface-dm-sans";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";

export default function App() {
  return (
    <Router>
      <main>
        <Route path="/contact" component={ContactPage} />
        <Route path="/" component={HomePage} exact />
      </main>
    </Router>
  );
}
