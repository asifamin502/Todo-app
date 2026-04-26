/* eslint-disable */

import { useState, type ChangeEvent, type FormEvent } from "react";
import type { todotype } from "./types";
import './newtodos.css'

type Newtodotype = {
  handleaddhometodo: (newtodo: todotype) => void;
};

const Newtodos = ({ handleaddhometodo }: Newtodotype) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handletitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handledescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleform = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newtodo = { title, description };
    handleaddhometodo(newtodo as todotype);
    setTitle("")
    setDescription("")
  };

  return (
    <div className="form">
      <form onSubmit={handleform}>
        <div>
          <input className="titlebox"
            type="text"
            value={title}
            onChange={handletitle}
            placeholder="Title"
            required
            autoFocus
          />
        </div>
        <div>
          <textarea className="descriptionbox"
            value={description}
            onChange={handledescription}
            placeholder="Description"
          />
        </div>
        <button className="submit" type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default Newtodos;
