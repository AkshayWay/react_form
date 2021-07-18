import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Link,
  hashHistory,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Login from "./component/login.js";
import Register from "./component/register.js";
import Home from "./component/home.js";
import Footer from "./component/footer.js";
import Navigation from "./component/navigation.js";
import AboutUs from "./component/aboutUs.js";

const Main = withRouter(({ location }) => {
  return (
    <div className="container">
      {location.pathname != "/login" && location.pathname != "/register" && (
        <Navigation />
      )}
      {localStorage.getItem("isLoggedIn") == 1 ? (
        <div>
          <Route path="/home" component={Home}></Route>
          <Route path="/about-us" component={AboutUs}></Route>
        </div>
      ) : null}
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      {location.pathname != "/login" && location.pathname != "/register" && (
        <Footer />
      )}
    </div>
  );
});
function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
