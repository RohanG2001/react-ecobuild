import { useEffect } from 'react';

function Home() {

  useEffect(() => {
    const timer = setTimeout(() => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="video">
        <div className="video-background" id="sec1">
          <video autoPlay muted loop>
            <source
              src="images/hero.webm"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="home" id="home">
        <div className="hero">
          <h1>Building Visions, <br /> Shaping The Future</h1>
          <p>Experienced & Reliable Builders, since 1968</p>
          <a href="#" className="get-qoute">
            <button>Get a Quote</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;