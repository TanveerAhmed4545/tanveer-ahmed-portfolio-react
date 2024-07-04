import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Count = () => {
  const [countStart, setCountStart] = useState(true);
  return (
    <section className="bg-[#6B88FF] bg-opacity-10 mb-5 py-5 px-2 rounded-md mx-[2.5%]">
      <ScrollTrigger
        onEnter={() => setCountStart(true)}
        onExit={() => setCountStart(false)}
      >
        <div className=" grid gap-5 grid-cols-2 md:grid-cols-4 justify-center items-center">
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <span className="font-bold text-3xl text-primary">
              {countStart ? (
                <CountUp start={0} end={6} duration={2} delay={0} />
              ) : (
                0
              )}
              +
            </span>{" "}
            <span className="font-medium">Months Experience</span>
          </div>
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <span className="font-bold text-3xl text-primary">
              {countStart ? (
                <CountUp start={0} end={40} duration={2} delay={0} />
              ) : (
                0
              )}
              +
            </span>{" "}
            <span className="font-medium">Completed Projects</span>
          </div>
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <span className="font-bold text-3xl text-primary">
              {countStart ? (
                <CountUp start={0} end={3} duration={2} delay={0} />
              ) : (
                0
              )}
              +
            </span>{" "}
            <span className="font-medium">Happy Customers</span>
          </div>
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <span className="font-bold text-3xl text-primary">
              {countStart ? (
                <CountUp start={0} end={5} duration={2} delay={0} />
              ) : (
                0
              )}
              +
            </span>{" "}
            <span className="font-medium">Honors and Awards</span>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
};

export default Count;
