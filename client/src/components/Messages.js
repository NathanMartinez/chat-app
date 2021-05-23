import styled from "styled-components";
import Message from "./Message";

export default function Messages() {
  return <MessageContainer></MessageContainer>;
}
const MessageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--blue);
  padding: 1rem;
`;
