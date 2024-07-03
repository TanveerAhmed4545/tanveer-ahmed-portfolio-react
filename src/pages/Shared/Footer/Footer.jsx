import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../../assets/Images/Tanveer-photo.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#e8e9f3] text-[#1F2937] pt-10 px-10 pb-6">
        <aside>
          <div className="flex items-center justify-center space-x-4">
            <img className="w-10 h-10 rounded-full" src={logo} alt="avatar" />
            <div className="font-medium">
              <h5 className="text-base font-semibold text-gray-900">
                Tanveer Ahmed
              </h5>
              <span className="text-sm text-gray-500">
                tanveer8507@gmail.com
              </span>
            </div>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
              <a
                href="https://m.facebook.com/tanveerAhmed4565/"
                className="transition-all duration-300 group-hover:scale-110"
              >
                <FaFacebook className="text-2xl text-blue-600"></FaFacebook>
              </a>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
              <a
                href="https://www.linkedin.com/in/tanveerahmed45/"
                className="transition-all duration-300 group-hover:scale-110"
              >
                <FaLinkedin className="text-2xl text-[#0A66C2]"></FaLinkedin>
              </a>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
              <a
                href="https://www.instagram.com/tanveer_ahmed_sarkar/"
                className="transition-all duration-300 group-hover:scale-110"
              >
                <FaInstagram className="text-2xl text-red-300"></FaInstagram>
              </a>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300">
              <a
                href="https://github.com/TanveerAhmed4545"
                className="transition-all duration-300 group-hover:scale-110"
              >
                <FaGithub className="text-2xl "></FaGithub>
              </a>
            </button>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center bg-[#e8e9f3] text-[#1F2937] p-4">
        <aside>
          <p className="font-medium">
            Copyright © {new Date().getFullYear()} - All right reserved by
            Tanveer Ahmed 🌎
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
