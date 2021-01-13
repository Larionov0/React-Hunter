import "./App.css";
import BoardContainer from "./Components/BoardContainer";
import TopPanelContainer from './Components/TopPanel/TopPanelContainer';

function App() {
  return (
    <div className="App">
      <TopPanelContainer />
      <BoardContainer />
    </div>
  );
}

export default App;
