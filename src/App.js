import Counter from "./Counter";
import FechtApi from "./FetchApi";


function App() {
  const datos = FechtApi("2019")
  console.log(datos);
  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <Counter/>
      
      
    </div>
  );
}

export default App;
