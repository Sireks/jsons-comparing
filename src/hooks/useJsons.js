import { useReducer } from 'react';

const defaultJson = { name: '', value: '' };

const reducer = (jsons, action) => {
  switch (action.type) {
    case 'add':
      return [...jsons, action.payload?.json || defaultJson ];

    case 'update':
      return jsons.map((json, index) => index === action.payload?.index ? action.payload?.json : json);

    case 'remove':
      return jsons.filter((_, index) => index !== action.payload?.index);
    
    case 'resetAll':
      return [];

    default:
      throw new Error();
  }
}

function useJsons() {
  const [ jsons, dispatchJsons ] = useReducer(reducer, []);

  return [ jsons, dispatchJsons ];
}

export default useJsons;
