import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Expertise from "./pages/Expertise";
import Contact from "./pages/Contact";

function App() {
    return (
        <div>
            <Navbar/>
            <Home/>
            <About/>
            <Expertise />
            <Contact />
        </div>
    );
}

export default App;
