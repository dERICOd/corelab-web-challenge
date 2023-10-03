import { useState } from "react";

import "./style.css";
import { AiOutlineStar } from "react-icons/ai";
import { updateTask } from "../../services/tasks";

export function UpdateCardForm({
  taskId,
  color,
}: {
  taskId: string;
  color: string;
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const update = {
      title: title,
      content: content,
      color: color,
    };
    await updateTask(taskId, update);
    window.location.reload();
  };
  return (
    <section className="CardForm_section">
      <form onSubmit={handleSubmit}>
        <div className="title_wrapper">
          <input
            value={title}
            type="text"
            placeholder="Atualize o título"
            onInput={(event) => {
              const target = event.target as HTMLInputElement;
              setTitle(target.value);
            }}
          />
          <button>
            <AiOutlineStar />
          </button>
        </div>
        <hr />
        <div className="noteContent_wrapper">
          <input
            value={content}
            type="text"
            placeholder="Atualize sua nota..."
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
