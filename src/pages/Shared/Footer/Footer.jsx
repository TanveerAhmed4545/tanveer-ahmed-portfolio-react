import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../../assets/Images/Tanveer-photo.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#e8e9f3] text-[#1F2937] pt-10 px-10 pb-6">
        <aside>
          <img src={logo} className="size-12" />

          <p className="font-bold">
            Tanveer Ahmed
            <br />
            MERN Stack Developer
            <br />
            Portfolio website
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://m.facebook.com/tanveerAhmed4565/">
              <FaFacebook className="text-2xl text-blue-600"></FaFacebook>
            </a>
            <a href="https://www.linkedin.com/in/tanveerahmed45/">
              <FaLinkedin className="text-2xl text-[#0A66C2]"></FaLinkedin>
            </a>
            <a href="https://www.instagram.com/tanveer_ahmed_sarkar/">
              <FaInstagram className="text-2xl text-red-300"></FaInstagram>
            </a>
            <a href="https://github.com/TanveerAhmed4545">
              <FaGithub className="text-2xl "></FaGithub>
            </a>
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
