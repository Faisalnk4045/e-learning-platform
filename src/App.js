import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Courses from './Courses/Courses';
import Enroll from './Enroll/Enroll';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import NotFound from './NotFound/NotFound';

function App() {

  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Container>
          <Switch>
            <Route exact path='/'>
              <Header></Header>
              <Courses page='home'></Courses>
            </Route>
            <Route path='/home'>
              <Header></Header>
              <Courses page='home'></Courses>
            </Route>
            <Route path='/courses'>
              <Courses page='courses'></Courses>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/enrolled'>
              <Enroll></Enroll>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Container>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;