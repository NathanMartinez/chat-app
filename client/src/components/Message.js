import styled from "styled-components";

export default function Message({ text = "" }) {
  
  return (
    <MessageContainer>
      <div>
        <p>{text}</p>
      </div>
    </MessageContainer>
  );
}
const MessageContainer = styled.div`
  background: transparent;
  display: flex;
  margin-bottom: 0.5rem;
  justify-content: flex-end;
  div {
    padding: 1rem;
    background: var(--grey);
    color: var(--dark-blue);
    border-radius: 0.3rem;
    width: fit-content;
  }
`;
