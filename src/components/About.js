function About() {
  return (
    <>
      <div style={{ marginTop: '15rem', width: '100%', height: '10px' }} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="./img/img1.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
              We specialize in innovative web development and bespoke e-commerce solutions. Our team of passionate professionals is committed to delivering tailored digital experiences that drive success. From startups to enterprises, we are dedicated to helping businesses thrive in the digital age. Join us on a journey of innovation and growth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
