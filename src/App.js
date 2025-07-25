import React, { useState, useEffect } from 'react';
import './App.css';

import profileImg from './assests/lanchan.jpg';
// import logo from './assests/logo.png';

import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
      });
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="App dark">
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="navbar">
            {/* <div className="logo">
              <img src={logo} alt="Logo" />
            </div> */}
            <div className="nav-toggle" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#certificates">Certificates</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero-container" id="home">
        <div className="hero-image">
          <img src={profileImg} alt="Profile" className="profile-img" />
        </div>
        <div className="hero-content">
          <h2>Hello</h2>
          <h1>I am Lanchan J</h1>
          <p>
            I am a computer science student passionate about coding, problem-solving, and building innovative solutions. 
            I aim to contribute to real-world projects and grow with collaborative teams.
          </p>
        </div>
      </main>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            As an engineering student, I am driven by curiosity and a passion for solving complex problems.  
            I enjoy learning about new technologies and applying my knowledge to create innovative solutions.  
            My goal is to contribute to impactful projects and grow as a professional in the field.
          </p>
          <div className="buttons">
            <a href="/LANCHAN J.pdf" download className="btn">View Resume</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>💻 <strong>Programming:</strong> Java, C# (Basic), Python, JavaScript</li>
          <li>🌐 <strong>Web Development:</strong> HTML, CSS, Node.js, Bootstrap</li>
          <li>⛃ <strong>Databases:</strong> SQL, MySQL</li>
          <li>⚙️ <strong>Tools:</strong> Git, GitHub</li>
          <li>🤖 <strong>ML Frameworks:</strong> TensorFlow, OpenCV</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-wrapper">
            <div className="project-card">
              <h3>UniFind</h3>
              <p>Web platform designed to help students discover universities based on courses, location, and eligibility criteria.</p>
              <a href="https://unifindproject.vercel.app/" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
            <div className="project-card">
              <h3>Truck Booking App</h3>
              <p>Real-time truck availability, booking, and cancellation system.</p>
              <a href="https://github.com/Lanchu14/Truck_Booking" target="_blank" rel="noreferrer">GitHub Link</a>
            </div>
            <div className="project-card">
              <h3>Employee Management System</h3>
              <p>A Java-based desktop application for managing employee records. </p>
              <a href="https://github.com/Lanchu14/Employee_Mangement_System" target="_blank" rel="noreferrer">GitHub Link</a>
            </div>
            <div className="project-card">
              <h3>Amazon Static Page</h3>
              <p>Responsive static replica of Amazon homepage using HTML and CSS.</p>
              <a href="https://amazon-basic-web-page.vercel.app/" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="certificates-section" id="certificates">
        <div className="container">
          <h2>Certificates</h2>
          <div className="certificates-wrapper">
            <div className="certificate-card">
              <img src="/certificates/certificate1.png" alt="Certificate 1" className="certificate-thumbnail" />
              <h3 class="cerificate-title">Web Development Course</h3>
              <a href="/certificates/certificate1.pdf" target="_blank" rel="noreferrer" className="btn">View</a>
            </div>
            <div className="certificate-card">
              <img src="/certificates/certificate2.png" alt="Certificate 2" className="certificate-thumbnail" />
               <h3 class="cerificate-title">Programming in Java</h3>
              <a href="/certificates/certificate2.pdf" target="_blank" rel="noreferrer" className="btn">View</a>
            </div>
            {/* Add more certificates here as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <h2>Contact Me / Hire Me</h2>
          <div className="buttons">
            <a href="tel:+919353989172" className="btn">
              <FaPhoneAlt /> Call Me
            </a>
            <a href="mailto:lanchanjain5@gmail.com" className="btn">
              <FaEnvelope /> Email Me
            </a>
            <a href="https://www.linkedin.com/in/lanchan-j-641178252/" className="btn" target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Lanchan Jain. All rights reserved.</p>
          <div className="footer-icons">
            <a href="mailto:lanchanjain5@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/lanchan-j-641178252/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Lanchu14" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
