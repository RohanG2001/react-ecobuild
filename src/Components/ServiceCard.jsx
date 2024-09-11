import PropTypes from 'prop-types';

const ServiceCard = ({ iconBw, iconColor, title, description }) => {
  return (
    <div className="service-card">
      <img className="bw" src={iconBw} alt={`${title} Icon`} />
      <img className="color" src={iconColor} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  iconBw: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;