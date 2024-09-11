import ServiceCard from './ServiceCard';
import serviceData from './serviceData';

function Services() {
  return (
    <>
      <section id="services" className="services">
      <div className="btn-head">
        <h1>We Offer Services to Meet All Types of Needs</h1>
        <button className="all-services-btn">All Services</button>
      </div>
      <div className="services-grid">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            iconBw={service.iconBw}
            iconColor={service.iconColor}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
    </>
  )
}

export default Services