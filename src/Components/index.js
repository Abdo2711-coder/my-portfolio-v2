import Sidbar from "./Sidbar";
import AboutMe from "./body/AboutMe";
import MySkills from "./body/MySkills";
import WhImGood from "./body/WhImGood";
import MyWorks from "./body/MyWorks";
import ContactMe from "./body/ContactMe";
import Container from "./body/Helpers/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (
    <Container>
      <Router>
        <div className={`md:w-3/12`}>
          <Sidbar />
        </div>
        <div className="px-6 md:px-12 md:w-9/12">
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route path="/mysk" component={MySkills} />
            <Route path="/what" component={WhImGood} />
            <Route path="/my" component={MyWorks} />
            <Route path="/contact" component={ContactMe} />
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

export default App;
