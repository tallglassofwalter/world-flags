import Country from './components/Country';
import countries from './components/countries-sm';
import './App.css';

function App() {
  return (
    <div className="App">
      {
        countries.map((el) => {
          return (
            <Country
              key={el.name}
              name={el.name}
              flag={el.flag}
            />
          )
        })
      }
    </div>
  );
}

export default App;
