import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Helmet } from "react-helmet-async";
import { FaDownload } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import SectionTitle from "../../components/SectionTitle";
import Services from "./Services/Services";
// ..
AOS.init();

const About = () => {
  return (
    <section className="py-5 px-[2.5%]">
      <Helmet>
        <title>Tanveer Ahmed || About</title>
      </Helmet>
      <div>
        <div className="flex justify-between text-3xl md:text-4xl font-semibold pb-3 text-primary border-b-2 border-solid border-[#b5c1fe]">
          <h1 className="uppercase">About_</h1>
          <HiUser />
        </div>
        <div className="py-5 md:flex gap-5 justify-between">
          <div
            className="flex-1 mb-5 md:mb-auto "
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <SectionTitle title={"About Me"} />
            <p className="mb-3 opacity-75">
              Hello! I am Tanveer Ahmed, a junior Front End Developer with a
              strong passion for web development. I have completed a
              comprehensive MERN stack web development course and gained
              hands-on experience building interactive web applications. I am
              dedicated to continuous learning and staying updated with the
              latest trends in the field.
              <br /> <br />
              With a solid foundation in MongoDB, Express.js, React.js, and
              Node.js, I am capable of handling both front-end and back-end
              development. I prioritize clean and efficient code, adhering to
              best practices to deliver seamless user experiences. I thrive in
              collaborative environments, valuing effective communication and
              knowledge sharing.
              <br /> <br />
              As a junior developer, I am eager to refine my coding skills,
              improve problem-solving abilities, and become a sought-after
              professional in web development. I am committed to continuous
              growth and actively seek new challenges to expand my knowledge and
              contribute to the advancement of the field.
              <br /> <br />
              Thank you for taking the time to get to know me. I am excited to
              leverage my skills and enthusiasm to create innovative web
              solutions. Let collaborate and create remarkable web experiences
              together!
            </p>
            {/* <div>
                            <img className="w-20" src={sign} alt="" />
                        </div> */}
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <div className="md:w-96">
              <SectionTitle title={"Personal Information"} />
              <div className="mb-5">
                <p className="mb-2">
                  <span className="border-b-2 border-primary pb-1 font-semibold">
                    Name:
                  </span>{" "}
                  <span>Tanveer Ahmed</span>
                </p>
                <p className="mb-2">
                  <span className="border-b-2 border-primary pb-1 font-semibold">
                    Age:
                  </span>{" "}
                  <span>29 Years</span>
                </p>
                <p className="mb-2">
                  <span className="border-b-2 border-primary pb-1 font-semibold">
                    Email:
                  </span>{" "}
                  <span>tanveer8507@gmail.com</span>
                </p>
                <p className="mb-2">
                  <span className="border-b-2 border-primary pb-1 font-semibold">
                    Phone:
                  </span>{" "}
                  <span>+880 1676-6745345</span>
                </p>
                <p className="mb-2">
                  <span className="border-b-2 border-primary pb-1 font-semibold">
                    Current Address:
                  </span>{" "}
                  <span> Uttara, Dhaka.</span>
                </p>
                <p className="mb-2">
                  <span className="border-b-2 border-primary pb-1 font-semibold">
                    Permanent Address:
                  </span>{" "}
                  <span>Matlab, Chandpur.</span>
                </p>
                <p className="mb-2">
                  <span className="border-b-2 border-primary pb-1 font-semibold">
                    Continent:
                  </span>{" "}
                  <span>Asia</span>
                </p>
                <p className="mb-3">
                  <span className="border-b-2 border-primary pb-1 font-semibold">
                    Freelance:
                  </span>{" "}
                  <span>Available</span>
                </p>
              </div>
              <a
                className="w-full mt-5"
                href="https://drive.google.com/file/d/1y2nKLh2bDdDRpf-Svr3C1IboW2adGKqL/view?usp=sharing"
              >
                <button className="w-full btn bg-[#6B88FF] border-none bg-opacity-10 rounded-md">
                  <FaDownload className="text-primary " /> Resume
                </button>
              </a>
            </div>
          </div>
        </div>

        <Services />
      </div>
    </section>
  );
};

export default About;
