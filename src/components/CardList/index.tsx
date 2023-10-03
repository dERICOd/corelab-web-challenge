import "./style.css";
import { StoreContext } from "../../context/store";
import { useContext } from "react";
import { Card } from "../Card";

export function CardList() {
  const { cardNotes, search } = useContext(StoreContext);

  console.log(cardNotes);

  const favorites = () => {
    const filteredCards = cardNotes.filter((card) => card.is_favorite === true);

    return filteredCards.map(({ id, title, is_favorite, content, color }) => (
      <Card
        id={id}
        title={title}
        key={id}
        is_favorite={is_favorite}
        content={content}
        color={color}
      />
    ));
  };

  const nonFavorites = () => {
    const filteredCards = cardNotes.filter(
      (card) => card.is_favorite === false
    );

    return filteredCards.map(({ id, title, is_favorite, content, color }) => (
      <Card
        id={id}
        title={title}
        key={id}
        is_favorite={is_favorite}
        content={content}
        color={color}
      />
    ));
  };

  const searchCards = (search: string) => {
    const filteredCards = cardNotes.filter(
      (card) => card.title.includes(search) || card.content.includes(search)
    );

    return filteredCards.map(({ id, title, is_favorite, content, color }) => (
      <Card
        id={id}
        title={title}
        key={id}
        is_favorite={is_favorite}
        content={content}
        color={color}
      />
    ));
  };

  return (
    <section>
      {search ? (
        searchCards(search)
      ) : (
        <main className="main">
          <div id="favorite">
            <p id="title">Favorites</p>
            <hr />
            <div id="list_cards"> {favorites()}</div>
          </div>
          <div id="others_cards">
            <p id="title">Others</p>
            <hr />
            <div id="list_cards">{nonFavorites()}</div>
          </div>
        </main>
      )}
    </section>
  );
}
