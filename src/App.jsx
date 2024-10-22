import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import MyWork from "./Components/MyWork/MyWork";
import Navbar from "./Components/Navbar/Navbar";
import Resume from "./Components/Resume/Resume";

function App() {

  return(
    <>
      <div className="background-img">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <MyWork/>
      <Resume/>
      <Contact/>
    </>
  );
}

export default App
