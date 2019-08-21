// libs
import styled from 'styled-components';

export default styled.button`
  text-transform: capitalized;
  font-size: 1.4rem;
  background: transparent;
  border: 1px solid var(--lightBlue);
  color: var(--mainWhite);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  margin 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
&:hover{
  background: var(--lightBlue);
  color: var(--mainWhite)
}
&:focus {
  outline: none;
}
`;
