/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Lottie from "lottie-react";
import { FaDownload } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";
import animation from "../../../assets/Animation.json";
// ..
AOS.init();

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "MERN Stack Developer"],
    loop: 0,
  });
  return (
    <section className="pb-5 px-[2.5%]">
      <div className="md:flex flex-row-reverse justify-between items-center">
        <div>
          <div>
            <Lottie
              className="max-h-[30rem] "
              animationData={animation}
              loop={true}
            ></Lottie>
          </div>
        </div>
        <div className="md:max-w-[50%] text-center md:text-left xl:max-w-lg">
          <h1 className="md:text-5xl text-3xl font-bold mb-3 uppercase">
            Tanveer <span className="text-primary">Ahmed</span>
          </h1>
          <p className="mb-5">
            <span>I'm </span>
            <span className="font-semibold border-b-2 border-primary">
              {text}
            </span>
          </p>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <p className="mb-5">
              Welcome to my portfolio! As a skilled MERN stack developer, I am
              currently seeking new opportunities to take on exciting
              challenges. With a passion for crafting interactive and visually
              stunning websites, I am dedicated to delivering my exceptional
              results. <br /> <br />
              If you want to make your website more interactive and beautiful,
              let's collaborate. Contact me today to discuss your project
              requirements and let's try to create something amazing together.
            </p>
          </div>
          <a
            className=""
            href="https://drive.google.com/file/d/1y2nKLh2bDdDRpf-Svr3C1IboW2adGKqL/view?usp=sharing"
          >
            <button className=" btn mt-5 bg-[#E3E7FA] rounded-md">
              <FaDownload className="text-primary" /> Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
