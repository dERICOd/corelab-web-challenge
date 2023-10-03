import { useState } from "react";

import "./style.css";
import { AiOutlineStar } from "react-icons/ai";
import { createTask } from "../../services/tasks";

export function NewCardForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newCard = {
      title: title,
      content: content,
      is_favorite: false,
    };
    await createTask(newCard);
    window.location.reload();
  };
  return (
    <section className="newCardForm_section">
      <form onSubmit={handleSubmit}>
        <div className="title_wrapper">
          <input
            value={title}
            type="text"
            placeholder="Título"
            onInput={(event) => {
              const target = event.target as HTMLInputElement;
              setTitle(target.value);
            }}
          />
          <button>
            <AiOutlineStar />
          </button>{" "}
        </div>
        <hr />
        <div className="noteContent_wrapper">
          <input
            value={content}
            type="text"
            placeholder="Criar nota..."
            onInput={(event) => {
              const target = event.target as HTMLInputElement;
              setContent(target.value);
            }}
          />
        </div>
        <button type="submit"></button>
      </form>
    </section>
  );
}
