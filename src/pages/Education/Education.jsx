import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Helmet } from "react-helmet-async";
import { MdCastForEducation } from "react-icons/md";
import SectionTitle from "../../components/SectionTitle";
// ..
AOS.init();

const Education = () => {
  return (
    <section
      className="py-5 px-[2.5%]"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <Helmet>
        <title>Tanveer Ahmed || Education</title>
      </Helmet>
      <div>
        <div className="flex justify-between text-3xl md:text-4xl font-semibold pb-3 text-primary border-b-2 border-solid border-[#b5c1fe]">
          <h1 className="uppercase">Education_</h1>
          <MdCastForEducation />
        </div>
        <div className="py-5">
          <SectionTitle title={"Academic "} />
          <div className="border-l-4 border-primary py-10 px-5 relative my-10">
            <div>
              <h1 className="uppercase text-xl font-semibold text-primary">
                Master of Science (MSc)
              </h1>
              <h2 className="uppercase font-semibold">Govt Titumir College</h2>
              <p className="mb-3">Mohakhali, Dhaka, Bangladesh</p>
              <p className="opacity-75">
                Successfully completed a Master of Science degree in Fisheries
                from Govt Titumir College,Mohakhali, Dhaka, Bangladesh.
                Developed expertise in fisheries science and related fields
                while honing research, analytical, and practical skills. GPA
                achieved was 2.92 out of 4.
              </p>
            </div>
            <div>
              <div className="startYear absolute top-[-15px] font-semibold text-xl">
                2021
              </div>
              <div className="endYear absolute bottom-[-15px] font-semibold text-xl">
                2022
              </div>
            </div>
            <p className="top-point absolute w-4 h-4 rounded-full border-4 border-primary top-[-15px] left-[-10px]"></p>
            <span className="bottom-point absolute w-4 h-4 rounded-full border-4 border-primary bottom-[-15px] left-[-10px]"></span>
          </div>
          <div className="border-l-4 border-primary py-10 px-5 relative my-10">
            <div>
              <h1 className="uppercase text-xl font-semibold text-primary">
                Bachelor of Science (BSc)
              </h1>
              <h2 className="uppercase font-semibold">Govt Titumir College</h2>
              <p className="mb-3">Mohakhali, Dhaka, Bangladesh</p>
              <p className="opacity-75">
                Successfully completed a Bachelor of Science degree in Zoology
                (Honors) from Govt Titumir College, Mohakhali, Dhaka,
                Bangladesh, in 2020. Achieved a result of 2.91 out of 4.
              </p>
            </div>
            <div>
              <div className="startYear absolute top-[-15px] font-semibold text-xl">
                2015
              </div>
              <div className="endYear absolute bottom-[-15px] font-semibold text-xl">
                2020
              </div>
            </div>
            <p className="top-point absolute w-4 h-4 rounded-full border-4 border-primary top-[-15px] left-[-10px]"></p>
            <span className="bottom-point absolute w-4 h-4 rounded-full border-4 border-primary bottom-[-15px] left-[-10px]"></span>
          </div>
          <div className="border-l-4 border-primary py-10 px-5 relative my-10">
            <div>
              <h1 className="uppercase text-xl font-semibold text-primary">
                HIGHER SECONDARY SCHOOL CERTIFICATE (HSC)
              </h1>
              <h2 className="uppercase font-semibold">Milestone College</h2>
              <p className="mb-3">Uttara, Dhaka, Bangladesh</p>
              <p className="opacity-75">
                Successfully completed the Higher Secondary School Certificate
                (HSC) in Science from Milestone College, Dhaka, Bangladesh, in
                2014, achieving a perfect result of 5.00 out of 5.
              </p>
            </div>
            <div>
              <div className="startYear absolute top-[-15px] font-semibold text-xl">
                2012
              </div>
              <div className="endYear absolute bottom-[-15px] font-semibold text-xl">
                2014
              </div>
            </div>
            <p className="top-point absolute w-4 h-4 rounded-full border-4 border-primary top-[-15px] left-[-10px]"></p>
            <span className="bottom-point absolute w-4 h-4 rounded-full border-4 border-primary bottom-[-15px] left-[-10px]"></span>
          </div>
        </div>
      </div>

      <SectionTitle title={"Courses"} />
      <div className="border-l-4 border-primary py-10 px-5 relative my-10">
        <div>
          <h1 className="uppercase text-xl font-semibold text-primary">
            COMPLETE WEB DEVELOPMENT WITH JANKAR MAHABUB
          </h1>
          <h2 className="uppercase font-semibold">PROGRAMMING HERO</h2>
          <p className="mb-3">USA (Online)</p>
          <p className="opacity-75">
            Successfully completed a comprehensive MERN Stack Web Development
            course, gaining proficiency in building full-stack web applications
            using the MongoDB, Express.js, React.js, and Node.js (MERN)
            technology stack. Developed practical skills in frontend and backend
            web development, including creating interactive user interfaces,
            designing and implementing RESTful APIs, managing databases, and
            deploying web applications. Acquired hands-on experience in
            utilizing modern web development tools, libraries, and frameworks.
            Demonstrated proficiency in HTML, CSS, JavaScript, React, Node.js,
            MongoDB, and Express.js. Applied agile development methodologies and
            collaborated in team projects to deliver functional web
            applications.
          </p>
        </div>
        <div>
          <div className="startYear absolute top-[-15px] font-semibold text-xl">
            Dec, 2023
          </div>
          <div className="endYear absolute bottom-[-15px] font-semibold text-xl">
            Jun, 2024
          </div>
        </div>
        <p className="top-point absolute w-4 h-4 rounded-full border-4 border-primary top-[-15px] left-[-10px]"></p>
        <span className="bottom-point absolute w-4 h-4 rounded-full border-4 border-primary bottom-[-15px] left-[-10px]"></span>
      </div>
    </section>
  );
};

export default Education;
