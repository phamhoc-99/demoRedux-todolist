import List from './components/List';
import {Provider} from 'react-redux';
import store from './storeConf';

function App() {
  return (
    <div className="App">
      <Provider store={store}> 
        <List/>
        </Provider>
    </div>
  );
}

export default App;
