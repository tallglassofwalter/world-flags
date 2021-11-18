import Country from './components/Country';
import countries from './components/countries-sm';
import './App.css';

function App() {
  return (
    <div className="App">
      {
        countries.map((el,i) => {
          return (
            <Country
              key={i}
              name={el.name}
              flag={el.flag}
            />
          )
        })
      }

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
