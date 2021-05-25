import { useState } from "react";
import styled from "styled-components";
import moment from "moment";

export default function MessageInput({ setData }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return
    setData((prev) => [
      ...prev,
      {
        message_id: 0,
        sender_id: 1,
        sender_name: "Nate",
        message_text: text,
        datetime: moment().format(),
      },
    ]);
    setText("");
  };

  return (
    <MessageForm onSubmit={handleSubmit}>
      <input
        id="message__input"
        type="text"
        value={text}
        onChange={handleChange}
        autoComplete="off"
      />
      <input id="message__submit" type="submit" onClick={handleSubmit} />
    </MessageForm>
  );
}
const MessageForm = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: var(--dark-blue);
  & > input {
    padding: 1rem;
    border: none;
    border-radius: 2rem;
    &:focus {
      outline: none;
    }
  }
  #message__input {
    flex: 1;
    margin-right: 1rem;
  }
  #message__submit {
    background: var(--orange);
    font-weight: bold;
    color: var(--dark-blue);
    &:hover {
      cursor: pointer;
    }
  }
`;
