import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/Landingpage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

function Landingpage() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand text-info" href="#home" style={{ fontWeight: "900" }}>
                <i className="bi bi-journal-code me-2"></i> My Blog Website
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                   <a className="nav-link custom-nav-link text-info" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link custom-nav-link text-info" href="#features">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link custom-nav-link text-info" href="#about">About Me</a>
                  </li>
                </ul>
              </div>
             </div>
            </nav>
            <header id="home" className="hero-section text-center d-flex align-items-center justify-content-center">
                <div className="background-icons">
                    <i className="fas fa-network-wired icon network"></i>
                    <i className="fas fa-shield-alt icon shield"></i>
                    <i className="fas fa-lock icon lock"></i>
                    <i className="fas fa-server icon server"></i>
                </div>
                <div className="container">
                    <h1 className="display-4 animated-heading text-info">Welcome to My Blog Website</h1>
                    <hr />
                    <p className="lead animated-subheading">
                        Read my weekly blogs about my subjects in Advanced Networking and Information Assurance & Security 1
                    </p>
                    <Link
                        to="/home"
                        className="btn btn-info btn-lg mt-3 btn-3d"
                        style={{ fontWeight: "900", color: "white" }}
                        >
                        Get Started
                    </Link>
                </div>
            </header>
            <section id="features" className="features-section py-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-4">
                            <div className="feature-card p-4 shadow-sm">
                                <i className="fas fa-book-open feature-icon mb-3 text-info"></i>
                                <h4>My Weekly Blogs</h4>
                                <p>Read about what I have learned during the week and interesting happenings throughout my learning.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-card p-4 shadow-sm">
                                <i className="fas fa-user-graduate feature-icon mb-3 text-info"></i>
                                <h4>Learn with Me</h4>
                                <p>You might learn something from what I’ve explored and discover what interests me during discussions and activities.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-card p-4 shadow-sm">
                                <i className="fas fa-paint-brush feature-icon mb-3 text-info"></i>
                                <h4>Enjoy Using My Website</h4>
                                <p>Experience comfort while reading and browsing with a responsive and clean design.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="about-section py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 text-center mb-4 mb-md-0">
                            <img
                                src="/profile.jfif"
                                alt="Profile"
                                className="bg-info"
                                style={{
                                    width: "300px",
                                    height: "300px",
                                    objectFit: "contain",
                                    borderRadius: "50%",
                                    padding: "10px",
                                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                                }}
                            />
                        </div>
                        <div className="col-md-7">
                            <h2 className="text-info mb-3">About Me</h2>
                            <p className="about-text">
                                Hi! I’m Alec Xander F. Espaldon a passionate BSIT student who loves learning and building things with code.
                                This blog is my digital notebook—where I document everything I’ve been learning about
                                <strong> Advanced Networking</strong>, <strong>Information Assurance & Security 1</strong>, and more.
                            </p>
                            <p className="about-text">
                                I enjoy creating websites with clean, responsive designs and using modern tools like
                                <strong> React</strong>, <strong>Bootstrap</strong>, <strong>Java</strong> and <strong>Python</strong> for backend logic.
                                Let’s learn and grow together!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-dark text-white text-center py-3">
                <div className="container">
                    &copy; 2025 MyLanding. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default Landingpage;