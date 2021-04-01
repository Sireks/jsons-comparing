// # Todo: add styles
const JsonUploadButton = ({ className, handleAdd }) => {
  const readFile = (file) => {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onerror = () => {
        reader.abort();
        reject(new DOMException("Problem parsing input file."));
      };
  
      reader.onload = () => {
        resolve({
          name: file.name,
          value: reader.result,
        });
      };

      reader.readAsText(file);
    });
  };
  
  const readFiles = (files) => {
    return Promise.all(
      Array.from(files).map(async file => await readFile(file))
    );
  };

  const handleChange = async (event) => {
    handleAdd(await readFiles(event.target.files));
  };

  // # Do I nedd to use Button component here?
  return (
    <label className={className}>
      <input
        onChange={handleChange}
        accept="application/JSON"
        type="file"
        multiple
        hidden
      />
      Upload JSONs
    </label>
  );
};

export default JsonUploadButton;
