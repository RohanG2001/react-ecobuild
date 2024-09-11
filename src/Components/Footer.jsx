import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <section>
      <footer className="fut text-center text-lg-start text-black">
        <div className="container p-4 pt-5 pb-0">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-xl-4 mx-0 row">
              <p style={{ margin: '1vh 0 2vh 0', fontSize: '1rem', display: 'inline-block' }} className="text-gray par">
                <span className="footname head">Echo<span style={{ color: '#ff6f00' }}>Build</span></span><br/>
                Building the future with precision and innovation. Our structures echo excellence and sustainability, shaping a resilient tomorrow.
              </p>
              <a href="#" className="get-qoute"><button>Contact Us</button></a>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold"><b>Contact</b></h6>
              <p className="text-gray"><i className="fas fa-home mr-3"></i> Xyz, Loremipsum 415523, Ipsum</p>
              <p className="text-gray"><i className="fas fa-envelope mr-3"></i> contact@echobuild.com</p>
              <p className="text-gray"><i className="fas fa-phone mr-3"></i> +91 98765 67890</p>
              <p className="text-gray"><i className="bx bxl-whatsapp-square mr-3"></i> +91 98765 67890</p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mt-5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d242.4363460377491!2d74.42996022907067!3d17.979755168044747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1717790472903!5m2!1sen!2sin" 
                width="100%" 
                height="200" 
                allowFullScreen="" 
                loading="lazy"   
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>                
          </div>

          <hr className="my-3" style={{ borderTop: '1px solid #000000', margin: '50px 0' }}/>

          <div className="p-3 pt-0 socials">
            <div className="text-center text-md-end text-gray">
              <a className="btn btn-outline-dark btn-floating m-1 text-gray" role="button"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-dark btn-floating m-1 text-gray" role="button"><i className="fas fa-envelope"></i></a>
              <a className="btn btn-outline-dark btn-floating m-1 text-gray" role="button"><i className="fab fa-instagram"></i></a>
            </div>

            <div className="text-start text-md-start par">
              <h5 className="text-start cr-text text-gray" style={{ fontSize: '14px' }}>© 2024 Copyright:
                EchoBuild | Designed By : <a href="https://portfoio-new-react.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: 'black'}}>RohanG</a></h5>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;