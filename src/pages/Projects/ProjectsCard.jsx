/* eslint-disable react/prop-types */
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectsCard = ({ project }) => {
  const { _id, projectName, projectImage, liveLink, category, framework } =
    project;
  console.log(_id);
  return (
    <div className="p-3 border-2 border-[#E3E7FA] hover:border-none hover:shadow-xl hover:shadow-[#9eadead7] transition duration-300 ease-in-out rounded-md ">
      <img
        className="w-full rounded-md h-52 object-cover mb-3"
        src={projectImage}
        alt=""
      />
      <div>
        <h1 className="text-xl font-semibold">{projectName}</h1>
        <p className="my-3 font-medium">{category}</p>
        <p className="my-3 font-medium">
          Based On <span>{framework} Tech.</span>
        </p>
        <div className="w-full flex justify-between">
          <Link to={`/projectDetails/${_id}`}>
            <button className="btn bg-secondary text-white rounded-md flex-1">
              Details
            </button>
          </Link>
          <a href={liveLink}>
            <button className="btn bg-primary text-white rounded-md flex-1">
              Preview <FaLink />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
