import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Helmet } from "react-helmet-async";
import { SiHyperskill } from "react-icons/si";
import SectionTitle from "../../components/SectionTitle";
import Logo from "../Home/Logo/Logo";
// ..
AOS.init();

const Skills = () => {
  return (
    <section
      className="py-5 px-[2.5%]"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <Helmet>
        <title>Tanveer Ahmed || Skills</title>
      </Helmet>
      <div>
        <div className="flex justify-between text-3xl md:text-4xl font-semibold mb-5 pb-3 text-primary border-b-2 border-solid border-[#b5c1fe]">
          <h1 className="uppercase">Skills_</h1>
          <SiHyperskill />
        </div>
      </div>
      <SectionTitle title={"My Skills"} />
      <div>
        <Logo />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between py-3">
          <div className="p-3 md:p-5 border-2 border-[#E3E7FA] rounded-md  hover:border-none hover:shadow-xl hover:shadow-[#9eadead7] transition duration-300 ease-in-out">
            <div>
              <h1 className="text-2xl font-semibold mb-3">Expertise</h1>
              <ul className="list-disc ml-5 leading-7">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript ES6</li>
                <li>React.js</li>
                <li>React Router</li>
                <li>React Hook Form</li>
                <li>Tailwind Css</li>
                <li>DaisyUI</li>
                <li>Firebase Authentication</li>
              </ul>
            </div>
          </div>
          <div className="p-3 md:p-5 border-2 border-[#E3E7FA] rounded-md hover:border-none hover:shadow-xl hover:shadow-[#9eadead7] transition duration-300 ease-in-out">
            <div>
              <h1 className="text-2xl font-semibold mb-3">Comfortable</h1>
              <ul className="list-disc ml-5 leading-7">
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>Rest API</li>
                <li>Devtool and Debugging</li>
                <li>JWT Token</li>
                <li>React Query</li>
                <li>Axios</li>
              </ul>
            </div>
          </div>
          <div className="p-3 md:p-5 border-2 border-[#E3E7FA] rounded-md hover:border-none hover:shadow-xl hover:shadow-[#9eadead7] transition duration-300 ease-in-out">
            <div>
              <h1 className="text-2xl font-semibold mb-3">Familiar</h1>
              <ul className="list-disc ml-5 leading-7">
                <li>Node.js</li>
                <li>Vue.js</li>
                <li>Stripe</li>
                <li>Date-fns</li>
                <li>Moments</li>
              </ul>
            </div>
          </div>
          <div className="p-3 md:p-5 border-2 border-[#E3E7FA] rounded-md hover:border-none hover:shadow-xl hover:shadow-[#9eadead7] transition duration-300 ease-in-out">
            <div>
              <h1 className="text-2xl font-semibold mb-3">Tools</h1>
              <ul className="list-disc ml-5 leading-7">
                <li>Windows</li>
                <li>VS Code</li>
                <li>Chrome Dev Tools</li>
                <li>Git and GitHub</li>
                <li>Vercel</li>
                <li>Firebase</li>
                <li>Netlify</li>
                <li>Dotenv</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
