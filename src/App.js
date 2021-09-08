import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState(1);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${next}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, [next]);

  const notify = () => toast("Error!");

  const previousPage = () => {
    if (next > 1) {
      setNext(next - 1);
    }
  };

  const nextPage = () => {
    if (next < 34) {
      setNext(next + 1);
    } else {
      notify();
    }
  };

  return (
    <div className="App">
      <Characters characterList={characterList} />
      <ToastContainer />
      <div className="buttons">
        <button onClick={previousPage}>Pagina anterior</button>
        <button onClick={nextPage}>Pagina seguinte</button>
      </div>
    </div>
  );
}

export default App;
