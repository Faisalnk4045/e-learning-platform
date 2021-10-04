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










/*
const data = [
    { id: 1, name: 'Introduction to Modern Brush Calligraphy', img: 'https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/4229371857501744c79489e327e2ccf0/original', price: 13.99, instructor: 'Kimberly Shrack', students: 11871, lessons: 19, duration: '1h 24m'},
    { id: 2, name: 'Introduction to Modern Brush Calligraphy', img: 'https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/4229371857501744c79489e327e2ccf0/original', price: 13.99, instructor: 'Kimberly Shrack', students: 11871, lessons: 19, duration: '1h 24m'},
    { id: 3, name: 'Introduction to Modern Brush Calligraphy', img: 'https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/4229371857501744c79489e327e2ccf0/original', price: 13.99, instructor: 'Kimberly Shrack', students: 11871, lessons: 19, duration: '1h 24m'},
    { id: 4, name: 'Introduction to Modern Brush Calligraphy', img: 'https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/4229371857501744c79489e327e2ccf0/original', price: 13.99, instructor: 'Kimberly Shrack', students: 11871, lessons: 19, duration: '1h 24m'},
    { id: 5, name: 'Introduction to Modern Brush Calligraphy', img: 'https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/4229371857501744c79489e327e2ccf0/original', price: 13.99, instructor: 'Kimberly Shrack', students: 11871, lessons: 19, duration: '1h 24m'},
    { id: 6, name: 'Introduction to Modern Brush Calligraphy', img: 'https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/4229371857501744c79489e327e2ccf0/original', price: 13.99, instructor: 'Kimberly Shrack', students: 11871, lessons: 19, duration: '1h 24m'},
    { id: 7, name: 'Introduction to Modern Brush Calligraphy', img: 'https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/4229371857501744c79489e327e2ccf0/original', price: 13.99, instructor: 'Kimberly Shrack', students: 11871, lessons: 19, duration: '1h 24m'},
    { id: 8, name: 'Introduction to Modern Brush Calligraphy', img: 'https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/4229371857501744c79489e327e2ccf0/original', price: 13.99, instructor: 'Kimberly Shrack', students: 11871, lessons: 19, duration: '1h 24m'},
    { id: 9, name: 'Introduction to Modern Brush Calligraphy', img: 'https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/4229371857501744c79489e327e2ccf0/original', price: 13.99, instructor: 'Kimberly Shrack', students: 11871, lessons: 19, duration: '1h 24m'},
    { id: 10, name: 'Introduction to Modern Brush Calligraphy', img: 'https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/4229371857501744c79489e327e2ccf0/original', price: 13.99, instructor: 'Kimberly Shrack', students: 11871, lessons: 19, duration: '1h 24m'},
    { id: 11, name: 'Introduction to Modern Brush Calligraphy', img: 'https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/4229371857501744c79489e327e2ccf0/original', price: 13.99, instructor: 'Kimberly Shrack', students: 11871, lessons: 19, duration: '1h 24m'},
    { id: 12, name: 'Introduction to Modern Brush Calligraphy', img: 'https://static.skillshare.com/cdn-cgi/image/width=448,quality=85,format=auto/uploads/video/thumbnails/4229371857501744c79489e327e2ccf0/original', price: 13.99, instructor: 'Kimberly Shrack', students: 11871, lessons: 19, duration: '1h 24m'}
  ]
*/