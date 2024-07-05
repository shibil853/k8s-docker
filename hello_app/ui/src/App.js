
import './App.css';
import Greetings from './components/Greetings';
import Visitors from './components/Visitors';

function App() {
  return (
    <div className="App">
    <div className="flex flex-col justify-center items-center h-screen ">
      <Greetings/>
      <Visitors/>
      </div>
        
    </div>
  );
}

export default App;
