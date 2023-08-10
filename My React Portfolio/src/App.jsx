// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import PortfolioPage from './PortfolioPage'

// function App() {
//   return (
//     <div className="App">
//       <PortfolioPage />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

// import PortfolioPage from "./PortfolioPage";

function App() {
  return (
    <div>
      <header>
        <h1>Jonathan Rainey</h1>
        <nav>
          <a href="#about">ABOUT ME</a>
          <a href="#contact">CONTACT ME</a>
          <a href="#resume">RESUME</a>
          <a href="#work">WORK</a>
        </nav>
      </header>

      <section className="subtitle">
        <div>
          <h2>WHEN IT'S RAINEY</h2>
        </div>
        
      </section>

      <main className="page-body">
        <section className="page-about" id="about">
          <h2>ABOUT ME</h2>
          
          <div>
            <p>
              Featured writer. ChaTGPT. I'm fueled by a deep love for coffee.
              From the moment I wake up to the late hours of the evening,
              (Andrew Huberman suggests otherwise) you can find me savoring the
              rich aromas and flavors of this beloved beverage. Coffee isn't
              just a drink for me; it's a way of life. Let me share a little
              more about my passion:
            </p>
            <p>
              Coffee Connoisseur: I take great pleasure in exploring the vast
              world of coffee. From single-origin beans to intricate brewing
              methods, I enjoy delving into the nuances and complexities that
              each cup offers. Whether it's a velvety espresso, a smooth
              pour-over, or a creamy latte, I appreciate the artistry and
              craftsmanship behind a well-crafted coffee experience
            </p>
          </div>
        </section>

        <section className="page-about" id="elements">
          <h2>My Work</h2>
          <div className="flex-container">
            <a
              href="https://brianlucla.github.io/Recipe-Generator-Based-on-Ingredient-Availability/"
              className="flex-html"
            >
              <div>
                <h3>Recipe Generator</h3>
                <span>HTML/CSS/JAVASCRIPT</span>
              </div>
            </a>

            <a
              href="https://balldontlie-5b4e2d2e88fb.herokuapp.com/"
              className="flex-html"
            >
              <div>
                <h3>Ball Don't Lie</h3>
                <span>Express/Node/Sequelize</span>
              </div>
            </a>
            <a
              href="https://infinite-dawn-55621-95fe0124fef6.herokuapp.com/"
              className="flex-html"
            >
              <div>
                <h3>Nature Nerds</h3>
                <span>Mongo/React/Node</span>
              </div>
            </a>
          </div>
        </section>

        <section className="information" id="me">
          <h2>Contact Me</h2>
          <div>
            <address>
              <a href="tel:+15555555555">Phone: 510-504-6485</a>
              <a href="mailto:jonathan.rainey5@gmail.com">
                E-MAIL: JONATHAN.RAINEY5GMAIL.COM
              </a>
              <a href="https://github.com/jrainey95">GITHUB</a>
            </address>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;