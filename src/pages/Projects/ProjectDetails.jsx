import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import loaderAnimation from "../../assets/hand-loading.json";
import SectionTitle from "../../components/SectionTitle";

const ProjectDetails = () => {
  const { id } = useParams();

  const { data: details = {}, isLoading } = useQuery({
    queryKey: ["Details"],
    queryFn: async () => {
      const res = await axios.get(
        `https://tanveer-ahmed-portfolio-server.vercel.app/project/${id}`
      );
      return res.data;
    },
  });
  //   console.log(details);

  if (isLoading)
    return (
      <div className="flex justify-center items-center ">
        <Lottie className="w-1/3" animationData={loaderAnimation} loop={true} />
      </div>
    );

  const {
    projectName,
    projectImage,
    projectScreenshots,
    developmentalDate,
    companyName,
    liveLink,
    githubClientSiteLink,
    githubServerSiteLink,
    category,
    framework,
    usedTechnologies,
    aboutProject,
  } = details;

  return (
    <section className="py-5 px-[2.5%]">
      <Helmet>
        <title>Tanveer Ahmed || Project Details</title>
      </Helmet>
      <div className="flex justify-between text-3xl md:text-4xl font-semibold pb-3 text-primary border-b-2 border-solid border-[#E3E7FA]">
        <h1 className="uppercase">{projectName}</h1>
      </div>
      <div className="w-full max-h-[700px] p-5 border-2 rounded-md border-[#E3E7FA] my-5">
        <img
          className="w-full object-cover rounded-md"
          src={projectImage}
          alt=""
        />
      </div>
      <div>
        <div className="md:flex gap-5 justify-between py-5">
          <div className="flex-1 mb-5 md:mb-auto">
            <SectionTitle title={"About Project"} />
            <p className="mb-3 opacity-75">{aboutProject}</p>
          </div>
          <div>
            <div className="md:w-96">
              <SectionTitle title={"Project Info"} />
              <div className="mb-5">
                <p className="mb-2">
                  <span className="border-b border-primary font-semibold">
                    Name:
                  </span>{" "}
                  <span>{projectName}</span>
                </p>
                <p className="mb-2">
                  <span className="border-b border-primary font-semibold">
                    Company:
                  </span>{" "}
                  <span>{companyName}</span>
                </p>
                <p className="mb-2">
                  <span className="border-b border-primary font-semibold">
                    Category:
                  </span>{" "}
                  <span>{category}</span>
                </p>
                <p className="mb-2">
                  <span className="border-b border-primary font-semibold">
                    Stack:
                  </span>{" "}
                  <span>{framework}</span>
                </p>
                <p className="mb-2">
                  <span className="border-b border-primary font-semibold">
                    Technologies:
                  </span>{" "}
                  <span>
                    {usedTechnologies?.map((x, i) => (
                      <span key={i}>{x}, </span>
                    ))}
                  </span>
                </p>
                <p className="mb-2">
                  <span className="border-b border-primary font-semibold">
                    Date:
                  </span>{" "}
                  <span>{developmentalDate}</span>
                </p>
              </div>
              <div className="w-full mt-5 flex justify-between gap-3">
                <a className="flex-1" href={liveLink}>
                  <button className="w-full btn bg-[#E3E7FA] rounded-md">
                    Preview
                  </button>
                </a>
                <a className="flex-1" href={githubClientSiteLink}>
                  <button className="w-full btn bg-[#E3E7FA] rounded-md">
                    Client
                  </button>
                </a>
                <a className="flex-1" href={githubServerSiteLink}>
                  <button className="w-full btn bg-[#E3E7FA] rounded-md">
                    Server
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <SectionTitle title={"Project Screenshots"} />
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-between py-3">
              {projectScreenshots?.map((img, idx) => (
                <div
                  key={idx}
                  className="p-3 border-2 rounded-md border-[#E3E7FA] h-80"
                >
                  <img
                    className="transition-all rounded-md duration-1000 h-full w-full object-cover object-top hover:object-bottom"
                    src={img}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
