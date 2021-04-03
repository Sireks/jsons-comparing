// # Do i need to use Button component here?
// # Can I make compare code more readable?
import dJSON from 'dirty-json';

// # Todo: add styles
const JsonDataCompareButton = ({ jsonsData, setComparedData }) => {
  /**
   * 
   * Function that return deep object keys separate with '.'
   * 
   * @param obj
   * @return [key.innerKey.innerKey];
   * 
   * 
   * Example: 
   * const obj = {
   *    hello: {
   *      world: 'beautiful',
   *      people: 'good',
   *    },
   * };
   * 
   * getDeepObjectKeys(obj) => ['hello.world', 'hello.people']
   * 
  */
  const getDeepObjectKeys = (obj) => {
    return Object.keys(obj)
      .map((key) =>
        typeof obj[key] === 'object'
          ? getDeepObjectKeys(obj[key]).map(i => `${key}.${i}`)
          : key
      ).flat();
  };
  
  /**
   * 
   * Function 
   * 
   * @param listOfJsonsData === jsonsData
   * @return { name: [key.innerKey.innerKey, key.innerKey.innerKey, ...] };
   * 
   * example: 
   * const jsonData = {
   *  name: 'en',
   *  value: {
   *    hello: {
   *      world: 'beautiful',
   *      people: 'good',
   *    },
   *  },
   * };
   * 
   * getGroppedJsonKeysByName([jsonData]) => { en: ['hello.world', 'hello.people'] }
   * 
  */
  const getGroppedJsonKeysByName = (listOfJsonsData) => {
    const groppedJsonKeysByName = {};
  
    // # TODO: add error handler (may be you can create useAlert hook to show error message)
    try {
      listOfJsonsData.forEach(({ name, value }) => groppedJsonKeysByName[name] = getDeepObjectKeys(dJSON.parse(value)));
    } catch {
      return {};
    }
    
    return groppedJsonKeysByName;
  };
  
  /**
   * 
   * Function that return object with jsonData.value keys as keys
   * and json names where keys was defined and files names where keys where undefined
   * 
   * TODO!!!
   * @param [{ name: 'jsonName', value: 'json' }]
   * @return {
   *  key.innerKey.innerKey: {
   *    'defined_in': [jsonName]
   *    'undefined_in': [jsonName]
   *  }
   * };
   * 
   * 
  */
  const getUncomparedJsonsNamesByKeys = (listOfJsonsData) => {
    const getUncomparedJsonsNamesByKeys = {};
  
    const groppedJsonKeysByName = getGroppedJsonKeysByName(listOfJsonsData);
  
    const allJsonsKeyList = Object.values(groppedJsonKeysByName)
      .flat()
      .filter((value, index, array) => array.indexOf(value) === index);
  
    allJsonsKeyList.forEach((key) => {
      getUncomparedJsonsNamesByKeys[key] = {
        'defined_in': [],
        'undefined_in': [],
      };

      listOfJsonsData.forEach(({ name }) => {
        groppedJsonKeysByName[name].indexOf(key) === -1
          ? getUncomparedJsonsNamesByKeys[key]['undefined_in'].push(name)
          : getUncomparedJsonsNamesByKeys[key]['defined_in'].push(name)
      });
    });
  
    return getUncomparedJsonsNamesByKeys;
  };

  const handleClick = () => {
    setComparedData(getUncomparedJsonsNamesByKeys(jsonsData));
  };

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
