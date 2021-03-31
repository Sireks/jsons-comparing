import { useState } from 'react';
import ImportJsons from 'components/ImportJsons';
import InputJsons from 'components/InputJsons';
import './CompareInput.scss';

const defaultJson = { name: '', value: '' };

const CompareInput = () => {
  const [ jsons, setJsons ] = useState([]);

  const addJson = (json = defaultJson) => {
    setJsons([...jsons, json]);
  };

  const updateJson = (json, index) => {
    setJsons(jsons.map((_json, _index) => index === _index ? json : _json));
  };

  const removeJson = (index) => {
    setJsons(jsons.filter((_, _index) => _index !== index));
  };

  const resetJsons = () => setJsons([]);

  return (
    <div className="CompareInput">
      <div>
        <span onClick={resetJsons}>Clear all</span>
      </div>

      <ImportJsons
        addJson={addJson}
      />

      <InputJsons
        jsons={jsons}
        addJson={addJson}
        updateJson={updateJson}
        removeJson={removeJson}
      />
    </div>
  );
}

export default CompareInput;