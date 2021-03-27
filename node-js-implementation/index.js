/**
 * 
 * Instructions:
 * - Install node version 11+;
 * - Create a folder like ./inputData;
 * - Drop into created folder jsons, that you need to compare;
 * - Run 'node index.js' to get a result;
 * 
*/

/**
 * 
 * Nodejs imports
 * 
*/
const fs = require('fs');


/**
 * 
 * Input data
 * 
*/
const folderPath = './inputData/';


/**
 * 
 * Functions and stuff
 * 
*/
const getGroppedJsonsByFileName = (folderPath) => {
  const groppedJsonsByFileName = {};

  fs.readdirSync(folderPath).forEach(fileName => {
    groppedJsonsByFileName[fileName] = JSON.parse(fs.readFileSync(folderPath + fileName));
  });

  return groppedJsonsByFileName;
};

const getGroppedJsonKeysByFileName = (groppedJsonsByFileName) => {
  const fileNames = Object.keys(groppedJsonsByFileName);
  const groppedJsonKeysByFileName = {};

  fileNames.forEach(fileName => 
    groppedJsonKeysByFileName[fileName] = getDeepObjectKeys(groppedJsonsByFileName[fileName])
  );
  
  return groppedJsonKeysByFileName;
};

const getDeepObjectKeys = (obj) => {
  return Object.keys(obj)
    .map((key) =>
      typeof obj[key] === 'object'
        ? getDeepObjectKeys(obj[key]).map(i => `${key}.${i}`)
        : key
    ).flat();
};

const getUncomparedTranslationsByKeys = (groppedJsonsByFilename) => {
  const uncomparedTranslationsByKeys = {};

  const fileNames = Object.keys(groppedJsonsByFilename);

  const groppedJsonKeysByFilename = getGroppedJsonKeysByFileName(groppedJsonsByFilename);
  const allJsonsKeyList = Object.values(groppedJsonKeysByFilename)
    .flat()
    .filter((value, index, array) => array.indexOf(value) === index);

  allJsonsKeyList.forEach((key) => {
    const uncomparedTranslationsList = fileNames
      .map(fileName => groppedJsonKeysByFilename[fileName].indexOf(key) === -1 ? fileName : undefined)
      .filter(i => i);
    
    if (uncomparedTranslationsList.length > 0) {
      uncomparedTranslationsByKeys[key] = uncomparedTranslationsList;
    }
  });

  return uncomparedTranslationsByKeys;
}


/**
 * 
 * Init
 * 
*/
console.log(getUncomparedTranslationsByKeys(getGroppedJsonsByFileName(folderPath)));
