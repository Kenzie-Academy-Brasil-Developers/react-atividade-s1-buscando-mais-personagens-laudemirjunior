import "./style.css";
function CharCard({ item }) {
  return (
    <>
      <section className={item.status} key={item.id}>
        <h2>{item.name}</h2>
        <img src={item.image} alt=""></img>
        <h3>{item.origin.name}</h3>
      </section>
    </>
  );
}

export default CharCard;
