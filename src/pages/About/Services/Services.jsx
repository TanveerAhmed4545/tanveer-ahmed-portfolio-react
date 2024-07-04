import { FaLaptopCode, FaLaptopHouse, FaShieldAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";

const Services = () => {
  return (
    <section className="py-5">
      <SectionTitle title={"Services"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  py-3">
        <div className="flex-1 p-3 border-2  w-full border-[#E3E7FA] rounded-md hover:border-none hover:shadow-xl hover:shadow-[#9eadead7] transition duration-300 ease-in-out">
          <FaLaptopHouse className="text-6xl mb-3 text-primary" />
          <div>
            <h1 className="text-2xl font-semibold mb-3">
              Responsive Web Design
            </h1>
            <ul className="list-disc ml-5 leading-7">
              <li>React website design</li>
              <li>HTML template design</li>
              <li>Figma to HTML design</li>
              <li>Pixel perfect front-end development</li>
              <li>Fully Responsive front-end development</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 p-3 w-full  border-2 border-[#E3E7FA] rounded-md hover:border-none hover:shadow-xl hover:shadow-[#9eadead7] transition duration-300 ease-in-out ">
          <FaLaptopCode className="text-6xl mb-3 text-primary" />
          <div>
            <h1 className="text-2xl font-semibold mb-3">Web Development</h1>
            <ul className="list-disc ml-5 leading-7">
              <li>Front-end react.js and Back-end Node.js & Express.js</li>
              <li>SEO friendly coding & standard maintain</li>
              <li>
                3rd party applications & scripts integration with existing
                website
              </li>
              <li>Custom layout/feature/functionality</li>
              <li>
                development for existing website using HTML, CSS, JS, Node.js,
                etc.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 p-3 border-2 border-[#E3E7FA] rounded-md hover:border-none hover:shadow-xl hover:shadow-[#9eadead7] transition duration-300 ease-in-out w-full">
          <FaShieldAlt className="text-6xl mb-3 text-primary" />
          <div>
            <h1 className="text-2xl font-semibold mb-3">Web Optimization</h1>
            <ul className="list-disc ml-5 leading-7">
              <li>
                Latest industry leading technology to compress & optimize
                websites
              </li>
              <li>Advanced optimization from server side to client side</li>
              <li>Performance/speed optimization and security tweak</li>
              <li>Penetration testing of websites and fixing issues</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
