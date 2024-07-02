import {
  FaCalendar,
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import profileImg from "../../../assets/Images/Tanveer.png";

const SideBar = () => {
  return (
    <>
      <div className="drawer z-50 lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="overflow-hidden grid justify-between h-full px-5 py-3 bg-[#E3E7FA] text-slate-950">
            <div className="text-center w-full">
              <div className="text-center w-full">
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-36 rounded-full ring ring-offset-2">
                    <img
                      className="rounded-full mx-auto h-36 w-36 object-cover"
                      src={profileImg}
                      alt=""
                    />
                  </div>
                </div>
                {/* <img
                  className="rounded-full mx-auto h-36 w-36 object-cover"
                  src={profileImg}
                  alt=""
                /> */}
              </div>
              <div className="text-center py-5">
                <h1 className="uppercase text-2xl font-bold text-primary">
                  Tanveer Ahmed
                </h1>
                <h3 className="font-semibold">MERN Stack Developer</h3>
                <div className="flex gap-3 justify-center pt-5">
                  <a href="https://www.linkedin.com/in/tanveerahmed45/">
                    <FaLinkedin className="text-xl text-[#0A66C2]" />
                  </a>
                  <a href="https://github.com/TanveerAhmed4545">
                    <FaGithub className="text-xl " />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100001729059456&mibextid=ZbWKwL">
                    <FaFacebook className="text-xl text-[#2563EB]" />
                  </a>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex-col w-full ">
              <div className="mb-2 flex gap-3 items-center">
                <span>
                  <MdEmail className="text-[#EA4335]" />
                </span>{" "}
                <p className="font-medium">tanveer8507@gmail.com</p>
              </div>
              <div className="mb-2 flex gap-3 items-center">
                <span>
                  <FaLocationDot className="text-[#34A853]" />
                </span>{" "}
                <p className="font-medium">Uttara, Dhaka, Bangladesh</p>
              </div>
              <div className="mb-2 flex gap-3 items-center">
                <span>
                  <FaCalendar className="text-[#FBBC04]" />
                </span>{" "}
                <p className="font-medium">11, April, 1996</p>
              </div>
              {/* <div className="flex gap-3 items-center">
                <span>
                  <FaFlag className="text-[#4285F4]" />
                </span>{" "}
                <p className="font-medium">Bangladeshi</p>
              </div> */}
            </div>
            <hr />

            <h2 className="py-2 font-semibold ">Language : </h2>
            <div className="flex justify-between pb-5">
              <div className="text-center">
                {/* <div
                  className="radial-progress text-primary"
                  style={{
                    "--value": "80",
                    "--size": "3rem",
                    "--thickness": "5px",
                  }}
                >
                  80%
                </div> */}
                <div
                  className="radial-progress text-emerald-400 rotate-90"
                  style={{
                    "--value": "80",
                    "--size": "2.5rem",
                    "--thickness": "4px",
                  }}
                >
                  <span className="text-slate-700 text-xs  font-extrabold -rotate-90">
                    80%
                  </span>
                </div>
                <p className="font-medium">Bangla</p>
              </div>
              <div className="text-center">
                {/* <div
                  className="radial-progress text-primary"
                  style={{
                    "--value": "65",
                    "--size": "3rem",
                    "--thickness": "5px",
                  }}
                >
                  65%
                </div> */}
                <div
                  className="radial-progress text-blue-500 rotate-90"
                  style={{
                    "--value": "65",
                    "--size": "2.5rem",
                    "--thickness": "4px",
                  }}
                >
                  <span className="text-slate-700 text-xs font-extrabold -rotate-90">
                    65%
                  </span>
                </div>
                <p className="font-medium">English</p>
              </div>
              <div className="text-center">
                <div
                  className="radial-progress text-amber-300 rotate-90"
                  style={{
                    "--value": "50",
                    "--size": "2.5rem",
                    "--thickness": "4px",
                  }}
                >
                  <span className="text-slate-700 text-sm font-extrabold -rotate-90">
                    50%
                  </span>
                </div>
                <p className="font-medium">Hindi</p>
              </div>
            </div>
            <div>
              <a
                className="mt-auto w-full"
                href="https://drive.google.com/file/d/1y2nKLh2bDdDRpf-Svr3C1IboW2adGKqL/view?usp=sharing"
              >
                <button className=" btn w-full rounded-md">
                  <FaDownload className="text-primary" /> Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
