import './App.css';
import FormMCF from './components/FormMCF';
import { ApiProvider } from './context/ApiContext';

function App() {
  return (
    <div>
      <ApiProvider>
        <FormMCF/>
      </ApiProvider>
    </div>
  );
}

export default App;
