import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="text-indigo-100 antialiased selection:bg-fuchsia-500 selection:text-white min-h-screen flex flex-col items-center overflow-x-hidden text-2xl">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="w-full max-w-6xl px-8 md:px-16 pt-36 pb-24 space-y-28">
        {/* Hero / About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
