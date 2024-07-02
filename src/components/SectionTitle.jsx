// eslint-disable-next-line react/prop-types
const SectionTitle = ({ title }) => {
  return (
    <div className="mb-5">
      <h1 className="uppercase text-3xl my-2">{title}</h1>
      <div className="w-60  rounded-full">
        {/* <div className="w-2/3 h-full bg-primary rounded-full"></div> */}
        <progress className="progress bg-[#c5d0fb] "></progress>
      </div>
    </div>
  );
};

export default SectionTitle;
