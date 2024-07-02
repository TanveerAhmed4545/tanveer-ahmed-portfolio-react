import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";
import { HiBriefcase } from "react-icons/hi";
import loaderAnimation from "../../assets/hand-loading.json";
import SectionTitle from "../../components/SectionTitle";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axios.get(
        "https://tanveer-ahmed-portfolio-server.vercel.app/projects"
      );
      return res.data;
    },
  });

  //   console.log(projects);

  if (isLoading)
    return (
      <div className="flex justify-center items-center ">
        <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
      </div>
    );

  return (
    <section className="py-5 px-[2.5%]">
      <Helmet>
        <title>Tanveer Ahmed || Projects</title>
      </Helmet>
      <div className="flex justify-between text-3xl md:text-4xl font-semibold pb-3 text-primary border-[#b5c1fe] border-b-2 border-solid ">
        <h1 className="uppercase">Portfolio.</h1>
        <HiBriefcase />
      </div>
      <div>
        <div className="py-5">
          <SectionTitle title={"Projects"} />
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-3">
              {projects.map((project) => (
                <ProjectsCard key={project._id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
