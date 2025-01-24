import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/ad.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "sq" : "en");
  };

  return (
    <nav className="flex items-center justify-between py-6 gap-4 ">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={80} height={33} alt="Logo" />
        </a>
      </div>

      {/* Social Icons and Language Toggle */}
      <div className="flex items-center gap-4 text-xl text-white">
        {/* Social Icons */}
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

        {/* Language Toggle Button */}
        <button
          onClick={toggleLanguage}
          className="border border-white text-sm md:text-base lg:text-lg px-3 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
        >
          {i18n.language === "en" ? "Shqip" : "English"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
