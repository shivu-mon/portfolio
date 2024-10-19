import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import MyWork from "./Components/MyWork/MyWork";
import Navbar from "./Components/Navbar/Navbar";

function App() {

  return(
    <>
      <div className="background-img">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <MyWork/>
    </>
  );
}

export default App
