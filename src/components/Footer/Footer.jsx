import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <h2 className="text-xl font-bold">
          TORI<span className="text-cyan-400">KUL</span>
        </h2>

        {/* Text */}
        <p className="text-gray-400 text-sm text-center">
          Designed & Built by Torikul
        </p>

        {/* Socials */}
        <div className="flex items-center gap-5 text-gray-300">

          <a
            href="#"
            className="hover:text-cyan-400 duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            className="hover:text-cyan-400 duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            className="hover:text-cyan-400 duration-300"
          >
            <FaTwitter />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;