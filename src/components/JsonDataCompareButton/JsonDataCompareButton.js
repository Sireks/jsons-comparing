// # Do i need to use Button component here?
import dJSON from 'dirty-json';

// # Todo: add styles
const JsonDataCompareButton = ({ jsonsData, setComparedData }) => {
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
  
    // # TODO: add error handler (may be you can create useAlert hook to show error message)
    try {
      _jsons.forEach(({ name, value }) => groppedJsonKeysByName[name] = getDeepObjectKeys(dJSON.parse(value)));
    } catch {
      return {};
    }
    
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

  const handleClick = () => {
    setComparedData(getUncomparedJsonsNamesByKeys(jsonsData));
  }

  return (
    <button
      className="JsonDataCompareButton"
      onClick={handleClick}
    >
      Compare
    </button>
  );
}

export default JsonDataCompareButton;
