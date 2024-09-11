import 'boxicons/css/boxicons.min.css';

function Navbar() {
  return (
    <> 
      <nav className="navbar" id="top-nav">
            <div className="logo">Echo<span>Build</span></div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
            </ul>
            <a href="#" className="cta"><button>Contact Us</button></a>
            
        </nav>

        <nav className="navbar2" id="bot-nav">
            <a href="#home" className="nav-item2">
                <div className="icon"><i className='bx bxs-home'></i></div>
                <span className="nav-text">Home</span>
            </a>
            <a href="#about" className="nav-item2">
                <div className="icon"><i className='bx bxs-info-circle'></i></div>
                <span className="nav-text">About</span>
            </a>
            <a href="#projects" className="nav-item2">
                <div className="icon"><i className='bx bxs-wrench' ></i></div>
                <span className="nav-text">Projects</span>
            </a>
            <a href="#services" className="nav-item2">
                <div className="icon"><i className='bx bx-code-alt' ></i></div>
                <span className="nav-text">Services</span>
            </a>
            <a href="#contact" className="nav-item2">
              <div className="icon"><i className='bx bxs-chat' ></i></div>
              <span className="nav-text">Testimonials</span>
          </a>
        </nav>
    </>
  )
}

export default Navbar