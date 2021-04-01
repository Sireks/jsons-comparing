import JsonUploadButton from 'components/JsonUploadButton';
import JsonDataForm from 'components/JsonDataForm';

const defaultJsonData = { name: '', value: '' };

// # Todo: add styles
const CompareInput = ({ jsonsData, setJsonsData }) => {
  const handleAddJsonData = (data = defaultJsonData) => {
    setJsonsData([...jsonsData, data ])
  };

  const handleAddBulkJsonsData = (listOfJsonsData) => {
    setJsonsData([...jsonsData, ...listOfJsonsData ]);
  }

  const handleUpdateJsonData = (data, index) => {
    const updatedJsonsData = [...jsonsData];    
    updatedJsonsData[index] = data;
    setJsonsData(updatedJsonsData);
  };

  const handleRemoveJsonData = (index) => {
    setJsonsData(jsonsData.filter((_, i) => i !== index));
  };

  return (
    <div className="CompareInput">
      <div className="CompareInput__content">
        {jsonsData.map((jsonData, index) => (
          <JsonDataForm
            key={index}
            jsonData={jsonData}
            className="CompareInput__item"
            handleUpdate={data => handleUpdateJsonData(data, index)}
            handleRemove={() => handleRemoveJsonData(index)}
          />
        ))}

        <div className="CompareInput__item CompareInput__item--add">
          {/* icon? */}

          {/* Todo: make button component */}
          <div
            className="CompareInput__button CompareInput__button--add"
            onClick={() => handleAddJsonData()}
          >
            + Add JSON form
          </div>

          <div className="CompareInput__separator">or</div>

          {/* Do I need to use button component here? */}
          <JsonUploadButton
            className="CompareInput__button CompareInput__button--upload"
            handleAdd={data => handleAddBulkJsonsData(data)}
          />
        </div>
      </div>
    </div>
  );
}

export default CompareInput;