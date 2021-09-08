import "./style.css";
import CharCard from "../CharCard";

function Characters({ characterList }) {
  return (
    <>
      <h1>Meus Personagens</h1>
      <div className="personagens">
        {characterList.map((item) => (
          <CharCard item={item} />
        ))}
      </div>
    </>
  );
}

export default Characters;
