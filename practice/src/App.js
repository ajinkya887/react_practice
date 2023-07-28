import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StudentList from './components/StudentList';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <StudentList students={StudentList} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
