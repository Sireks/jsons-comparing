/**
 * 
 * Files storage
 * 
*/
let filesData = {};

const setFilesData = (key, value) => {
  filesData = {
    ...filesData,
    [key]: value,
  };
};

const resetFilesData = () => {
  filesData = {};
};


/**
 * 
 * Get stringified json keys 
 * 
 * @params obj
 * 
 * @return {[string]}
 * 
*/
const getObjectKeys = (obj) => {
  return Object.keys(obj)
    .map((key) =>
      typeof obj[key] === 'object'
        ? getObjectKeys(obj[key]).map(i => `${key}.${i}`)
        : key
    ).flat();
};


/**
 * 
 * Get all json keys grouped by filename 
 * 
 * @params groppedJsonsByFileName
 * 
 * @return {[filename]: [jsonKey]}
 * 
*/
const getGroppedJsonKeysByFileName = (groppedJsonsByFileName) => {
  const fileNames = Object.keys(groppedJsonsByFileName);
  const groppedJsonKeysByFileName = {};

  fileNames.forEach(fileName =>
    groppedJsonKeysByFileName[fileName] = getObjectKeys(groppedJsonsByFileName[fileName])
  );

  return groppedJsonKeysByFileName;
};


/**
 * 
 * Get uncompared keys
 * 
 * @params groppedJsonsByFilename
 * 
 * @return {[key]: [filenames that are not compared]}
 * 
*/
const getUncomparedFilesByKeys = (groppedJsonsByFilename) => {
  const uncomparedFilesByKeys = {};

  const groppedJsonKeysByFilename = getGroppedJsonKeysByFileName(groppedJsonsByFilename);
  const allJsonsKeyList = Object.values(groppedJsonKeysByFilename)
    .flat()
    .filter((value, index, array) => array.indexOf(value) === index);

  const fileNames = Object.keys(groppedJsonsByFilename);
  allJsonsKeyList.forEach((key) => {
    const uncomparedFilesList = fileNames
      .map(fileName => groppedJsonKeysByFilename[fileName].indexOf(key) === -1 ? fileName : undefined)
      .filter(i => i);

    if (uncomparedFilesList.length > 0) {
      uncomparedFilesByKeys[key] = uncomparedFilesList;
    }
  });

  return uncomparedFilesByKeys;
}


/**
 * 
 * Reading files and store them into filesData
 * 
*/
const readFile = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => setFilesData(file.name, JSON.parse(e.target.result));
  reader.readAsText(file);
}

const readFiles = (files) => {
  for (let i = 0; i < files.length; i++) {
    readFile(files[i]);
  }
}


/**
 * 
 * Input file change handler
 * 
 */
const onChange = async event => {
  resetFilesData();
  readFiles(event.target.files);

  const resultHtml = document.getElementById('result');
  const fileUploadHtml = document.getElementsByClassName('files-upload')[0];

  fileUploadHtml.className += ' is-active';

  // compare and return uncompared data
  setTimeout(() => {
    const uncomparedFilesByKeys = getUncomparedFilesByKeys(filesData);

    resultHtml.className += ' is-visible';
    resultHtml.textContent = JSON.stringify(uncomparedFilesByKeys, " ", 2);
  }, 500);
}


document.getElementById('files').addEventListener('change', onChange);
