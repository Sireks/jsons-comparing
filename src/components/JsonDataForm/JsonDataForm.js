// # Todo: add styles
const JsonDataForm = ({ jsonData, handleUpdate, handleRemove }) => {
  const handleChange = ({ target: { name, value } }) => {
    handleUpdate({ ...jsonData, [name]: value });
  };

  return (
    <div className="JsonDataForm">
      <div
        className="JsonDataForm__remove"
        onClick={handleRemove}
        title="Remove JSON"
      >
        X
      </div>

      {/* Todo: Create Input component */}
      {/* Todo: Add validation */}
      <input
        name="name"
        placeholder="JSON name"
        className="JsonDataForm__input"
        onChange={handleChange}
        value={jsonData.name}
      />

      {/* Todo: Create Textarea component */}
      {/* Todo: Add validation */}
      <textarea
        name="value"
        placeholder="JSON value"
        className="JsonDataForm__input JsonDataForm__textarea"
        onChange={handleChange}
        value={jsonData.value}
      />
    </div>
  )
};

export default JsonDataForm;