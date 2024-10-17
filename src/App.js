import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MusicShowcase from './components/MusicShowcase';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <Router basename="/soul-unknown">
      <div className="App">
        <Navbar onSectionChange={handleSectionChange} />

        {activeSection === 'home' && <Hero />}
        {activeSection === 'about' && <About />}
        {activeSection === 'music' && <MusicShowcase />}
        {activeSection === 'events' && <Events />}
        {activeSection === 'contact' && <Contact />}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
