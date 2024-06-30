import Card from "./Card";
function Services() {
    return (
        <div className="container services">
            <h2 className="main-title text-center">SERVICES</h2>
            <div className="card-cover">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <Card title="Web Development" img="card1.png" text="Turn your ideas into powerful digital solutions. From sleek corporate sites to dynamic web applications, we create tailored online experiences." />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="E-Commerce Services" img="card2.png" text="Elevate your online business with user-friendly, secure e-commerce platforms that drive sales and enhance satisfaction." />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="Cyber Security" img="card3.png" text="Safeguard your digital assets with cutting-edge solutions—from threat detection to data encryption, ensuring resilience in today’s digital landscape." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Services;
