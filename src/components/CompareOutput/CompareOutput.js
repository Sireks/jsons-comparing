import dJSON from 'dirty-json';
import { useState } from 'react';

const CompareOutput = ({ jsons }) => {
  const [ compareResult, setCompareResult ] = useState();

  const getDeepObjectKeys = (obj) => {
    return Object.keys(obj)
      .map((key) =>
        typeof obj[key] === 'object'
          ? getDeepObjectKeys(obj[key]).map(i => `${key}.${i}`)
          : key
      ).flat();
  };

  const getGroppedJsonKeysByName = (_jsons) => {
    const groppedJsonKeysByName = {};
  
    _jsons.forEach(({ name, value }) => groppedJsonKeysByName[name] = getDeepObjectKeys(dJSON.parse(value)));
    
    return groppedJsonKeysByName;
  };
  
  const getUncomparedJsonsNamesByKeys = (_jsons) => {
    const getUncomparedJsonsNamesByKeys = {};
  
    const groppedJsonKeysByName = getGroppedJsonKeysByName(_jsons);

    const allJsonsKeyList = Object.values(groppedJsonKeysByName)
      .flat()
      .filter((value, index, array) => array.indexOf(value) === index);
  
    allJsonsKeyList.forEach((key) => {
      const uncomparedJsonsNames = _jsons
        .map(({ name }) => groppedJsonKeysByName[name].indexOf(key) === -1 ? name : undefined)
        .filter(i => i);
      
      if (uncomparedJsonsNames.length > 0) {
        getUncomparedJsonsNamesByKeys[key] = uncomparedJsonsNames;
      }
    });
  
    return getUncomparedJsonsNamesByKeys;
  }

  const handleCompare = () => {
    setCompareResult(getUncomparedJsonsNamesByKeys(jsons));
  };

  const renderResult = () => {
    return (
      <div>
        <pre>{JSON.stringify(compareResult, ' ', 2)}</pre>
      </div>
    )
  };

  return (
    <div className="CompareOutput">
      <button onClick={handleCompare}>Compare</button>

      {compareResult && renderResult()}
    </div>
  )
};

export default CompareOutput;
