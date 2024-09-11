function About() {
  return (
    <>
      <section className="about" id="about">
            <div className="about-content">
                <div className="text">
                    <h2>ABOUT OUR COMPANY</h2>
                    <h3>We provide professional solutions to deliver safe & efficient projects</h3>
                    <p>This is the space to introduce visitors to the business or brand. Briefly explain who&apos;s behind it, what it does and what makes it unique. Share its core values and what this site has to offer.</p>
                    <a href="#" className="read-more"><button>Read More</button></a>
                    <div className="stats">
                        <div className="stat">
                            <h3>48</h3>
                            <p>In-Progress Sites</p>
                        </div>
                        <div className="stat">
                            <h3>282</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat">
                            <h3>35</h3>
                            <p>Business Partners</p>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src="images/about1.jpg" alt="Construction Site"/>
                </div>
            </div>
            
        </section>
    </>
  )
}

export default About