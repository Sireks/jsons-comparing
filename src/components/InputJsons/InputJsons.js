import './InputJsons.scss';

const InputJsons = ({ jsons, addJson, updateJson, removeJson }) => {
  const renderJsonForm = (json, index) => (
    <div
      key={index}
      className="InputJsons__item"
    >
      <div
        className="InputJsons__item-remove"
        onClick={() => removeJson(index)}
      >
        X
      </div>

      <div className="InputJsons__item-label">Name:</div>
      <input
        className="InputJsons__item-input"
        onChange={e => updateJson({ ...json, name: e.target.value }, index)}
        value={json.name}
      />

      <div className="InputJsons__item-label">JSON to compare:</div>
      <textarea
        className="InputJsons__item-input InputJsons__item-textarea"
        onChange={e => updateJson({ ...json, value: e.target.value }, index)}
        value={json.value}
      />
    </div>
  );

  return (
    <div className="InputJsons">
      {jsons.map((json, index) => renderJsonForm(json, index))}

      <div
        className="InputJsons__item InputJsons__item--add"
        onClick={() => addJson()}
      >
        + Add another Json
      </div>
    </div>
  );
};

export default InputJsons;