const ImportJsons = ({ dispatchJsons }) => {
  const readFile = (file) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      dispatchJsons({
        type: 'add',
        payload: {
          json: {
            name: file.name,
            value: e.target.result,
          },
        },
      });
    };

    reader.readAsText(file);
  };
  
  const readFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      readFile(files[i]);
    }
  };

  const handleChange = (event) => {
    readFiles(event.target.files);
  };

  return (
    <label className="ImportJsons">
      <input
        onChange={handleChange}
        accept="application/JSON"
        type="file"
        multiple
        hidden
      />

      Import Jsons as file
    </label>
  );
};

export default ImportJsons;
