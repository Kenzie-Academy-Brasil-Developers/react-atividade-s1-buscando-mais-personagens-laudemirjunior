import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState(
    "https://rickandmortyapi.com/api/character/"
  );

  useEffect(() => {
    if (next !== null) {
      fetch(`${next}`)
        .then((response) => response.json())
        .then((response) => {
          setCharacterList([...characterList, ...response.results]);
          setNext(response.info.next);
        })
        .catch((err) => console.log(err));
    }
  }, [next]);

  return (
    <div className="App">
      <Characters characterList={characterList} />
      <ToastContainer />
    </div>
  );
}

export default App;
