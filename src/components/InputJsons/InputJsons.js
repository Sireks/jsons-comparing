import './InputJsons.scss';

const InputJsons = ({ jsons, dispatchJsons }) => {
  const handleAddJson = () => dispatchJsons({ type: 'add' });

  const handleUpdateJson = (json, index) => dispatchJsons({ type: 'update', payload: { json, index } });

  const handleRemoveJson = index => dispatchJsons({ type: 'remove', payload: { index } });

  return (
    <div className="InputJsons">
      {jsons.map((json, index) => (
        <div
          key={index}
          className="InputJsons__item"
        >
          <div
            className="InputJsons__item-remove"
            onClick={() => handleRemoveJson(index)}
          >
            X
          </div>
    
          <div className="InputJsons__item-label">Name:</div>
          <input
            className="InputJsons__item-input"
            onChange={e => handleUpdateJson({ ...json, name: e.target.value }, index)}
            value={json.name}
          />
    
          <div className="InputJsons__item-label">JSON to compare:</div>
          <textarea
            className="InputJsons__item-input InputJsons__item-textarea"
            onChange={e => handleUpdateJson({ ...json, value: e.target.value }, index)}
            value={json.value}
          />
        </div>
      ))}

      <div
        className="InputJsons__item InputJsons__item--add"
        onClick={() => handleAddJson()}
      >
        + Add another Json
      </div>
    </div>
  );
};

export default InputJsons;