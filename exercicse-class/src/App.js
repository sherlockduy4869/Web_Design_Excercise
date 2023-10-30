import logo from './logo.svg';
import './App.css';
import CounterRow from './components/CounterRow/CounterRow'

function App() {
  let counterRows = [];
  for (let i = 0; i < 5; i++) {
    counterRows.push(<CounterRow key={i} id={i + 1} />);
  }

  return (
    <>
      <header>
        <h1>Counter application</h1>
      </header>
      <div id='counterContainer'>
        {counterRows}
      </div>
    </>
  );
}

export default App;
