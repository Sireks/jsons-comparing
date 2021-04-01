import ImportJsons from 'components/ImportJsons';
import InputJsons from 'components/InputJsons';
import './CompareInput.scss';

const CompareInput = ({ jsons, dispatchJsons }) => {
  const handleResetJsons = () => dispatchJsons({ type: 'reset' });

  return (
    <div className="CompareInput">
      <div>
        <span onClick={handleResetJsons}>Clear all</span>
      </div>

      <ImportJsons
        dispatchJsons={dispatchJsons}
      />

      <InputJsons
        jsons={jsons}
        dispatchJsons={dispatchJsons}
      />
    </div>
  );
}

export default CompareInput;