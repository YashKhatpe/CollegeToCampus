import React from 'react';
import PropTypes from 'prop-types';

const FrameComponent24 = ({ imageSrc, title, description, buttonText }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-48 lg:w-48 lg:h-full object-cover"
      />
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
        <button className="self-end bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

FrameComponent24.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default FrameComponent24;
