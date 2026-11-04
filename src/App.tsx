import { Navigation } from './components/sections/Navigation';
import { Home } from './components/sections/Home';
import { Videos } from './components/sections/Videos';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Milestones } from './components/sections/Milestones';
import { Socials } from './components/sections/Socials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Home />
        <Videos />
        <About />
        <Projects />
        <Milestones />
        <Socials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;