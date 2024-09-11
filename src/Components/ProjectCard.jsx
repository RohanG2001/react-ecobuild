import PropTypes from 'prop-types';

const ProjectCard = ({ imageUrl, imageAlt, title, description }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={imageAlt} />
      <div className="project-card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;