import CompareInput from 'components/CompareInput';
import CompareOutput from 'components/CompareOutput';

import useJsons from 'hooks/useJsons';

function App() {
  const [ jsons, dispatchJsons ] = useJsons();

  return (
    <div className="App">
      <CompareInput jsons={jsons} dispatchJsons={dispatchJsons} />
      <CompareOutput jsons={jsons} />
    </div>
  );
}

export default App;
