import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/ad.png";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const Navbar = ({ lightMode, toggleLightMode }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "sq" : "en");
  };

  return (
    <nav className="flex items-center justify-between py-6 gap-4">
      <div className="flex items-center flex-shrink-0">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={80} height={33} alt="Logo" />
        </a>
      </div>

      <div className="flex items-center gap-4 text-xl">
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/leartmusahu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
          </a>
          <a
            href="https://www.instagram.com/leartmusahu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-600 transition-colors duration-300"
          >
            <FaInstagram className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
          </a>
          <a
            href="https://github.com/leartmusahu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithub className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
          </a>
        </div>

        <button
          onClick={toggleLanguage}
          className={`border ${
            lightMode ? "border-black text-black" : "border-white text-white"
          } text-sm md:text-base lg:text-lg px-3 py-2 rounded-lg hover:bg-opacity-50 hover:shadow-lg transition-all duration-300`}
        >
          {i18n.language === "en" ? "Shqip" : "English"}
        </button>

        <button
          onClick={toggleLightMode}
          className={`px-3 py-2 rounded-lg ${
            lightMode ? "rounded-full text-white " : " text-white"
          } text-sm md:text-base lg:text-lg transition-all duration-300`}
        >
          {lightMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  lightMode: PropTypes.bool.isRequired,
  toggleLightMode: PropTypes.func.isRequired,
};

export default Navbar;
