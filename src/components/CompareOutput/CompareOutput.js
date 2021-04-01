// # Todo: add styles
const CompareOutput = ({ comparedData }) => {
  return comparedData ? (
    <div className="CompareOutput">
      <pre>{JSON.stringify(comparedData, ' ', 2)}</pre>
    </div>
  ): null;
};

export default CompareOutput;
