import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';


function App() {
  return (
    <div>
      <ThemeProvider>
        <Header />
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Education />
        <Skills />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;