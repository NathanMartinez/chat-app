import styled from "styled-components";

export default function Message({ text = "", sender_name = "" }) {
  return (
    <MessageContainer>
      <div>
        <p>{text}</p>
        <small>- {sender_name}</small>
      </div>
    </MessageContainer>
  );
}
const MessageContainer = styled.div`
  background: transparent;
  display: flex;
  margin-bottom: 0.5rem;
  & > div {
    padding: 1rem;
    background: var(--grey);
    color: var(--dark-blue);
    border-radius: 0.3rem;
    width: fit-content;
  }
  p {
    margin-bottom: 1rem;
  }
`;
