import styled from "styled-components";
import Message from "./Message";

export default function Messages({ data }) {
  const result = data.map((msg) => {
    return <Message key={msg.message_id} text={msg.message_text} />;
  });
  return <MessageContainer>{result}</MessageContainer>;
}
const MessageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--blue);
  padding: 1rem;
  overflow: scroll;
`;
