import { useState } from "react";
import PropTypes from "prop-types";

export default function ProjectModal({ project, closeModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = project.moreImages || [];

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-neutral-800 p-3 rounded-lg w-full max-w-6xl relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-4xl text-gray-600 hover:text-black transition-colors z-50"
        >
          &times;
        </button>

        <div className="text-white text-center mb-6 px-4">
          <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
          <p className="text-lg mb-4">{project.description}</p>
        </div>

        <div className="flex justify-center items-center relative">
          <button
            onClick={handlePrev}
            className="absolute left-4 p-4 text-white bg-gray-800 rounded-full z-50"
          >
            &lt;
          </button>

          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image}
                    alt={`Project image ${index + 1}`}
                    className="w-full max-h-[600px] rounded-lg object-contain"
                    style={{
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 p-4 text-white bg-gray-800 rounded-full z-50"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    moreImages: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};
