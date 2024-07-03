// eslint-disable-next-line react/prop-types
const SectionTitle = ({ title }) => {
  return (
    <div className="mb-4">
      <h1 className="uppercase font-medium text-3xl my-2">{title}</h1>
      <div className="w-60  rounded-full">
        <progress className="progress w-56 bg-gray-200 progress-primary"></progress>
      </div>
    </div>
  );
};

export default SectionTitle;
