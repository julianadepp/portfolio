import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Header from "./components/Header";
    

function App() {
  return (
    <div className="App">
      <section id="landing">
        <Header />
      </section>

        <header>
          <Header />
        </header>
      <main>
        <section id="about">
          <AboutMe />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contacts />
        </section>
      </main>
      <div class="area" >
            <ul class="flowers">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    </div>
  );
}

export default App;

