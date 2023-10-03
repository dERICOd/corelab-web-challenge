import { AiOutlineEdit } from "react-icons/ai";
import Modal from "../Modal";
import { BsPaintBucket } from "react-icons/bs";
import { RiCloseLine } from "react-icons/Ri";
import { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { CardNoteProps } from "../../types/card";
import { handleDelete } from "./functions/handleDelete";
import { handleFavoriteTask } from "./functions/handleFavoriteTask";
import { UpdateCardForm } from "../UpdateCardForm";
import "./style.css";
export function Card({
  id,
  title,
  is_favorite,
  content,
  color,
}: CardNoteProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditOn, setIsEditOn] = useState<boolean>(false);

  return isEditOn ? (
    <UpdateCardForm taskId={id} color={color} />
  ) : (
    <div
      className="cardBox"
      style={{ background: color, position: "relative" }}
    >
      <div
        className="title_wrapper"
        style={{ margin: "0.5rem 0rem 0.5rem 0rem" }}
      >
        <p>{title}</p>
        <button onClick={() => handleFavoriteTask(id, is_favorite)}>
          {is_favorite ? <AiFillStar /> : <AiOutlineStar />}
        </button>
      </div>
      <hr />
      <div className="noteContent_wrapper">
        <p>{content}</p>
      </div>
      <div className="tools">
        {isModalOpen && <Modal taskId={id} />}
        <div>
          <button
            className="edit_note"
            onClick={() => setIsEditOn((prevState) => !prevState)}
          >
            <AiOutlineEdit />
          </button>
          <button className="change_color">
            <BsPaintBucket onClick={() => setIsModalOpen(!isModalOpen)} />
          </button>
        </div>
        <button
          className="delete_note"
          type="button"
          onClick={() => handleDelete(id)}
        >
          <RiCloseLine />
        </button>
      </div>
    </div>
  );
}
