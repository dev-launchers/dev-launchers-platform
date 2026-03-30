import styled from 'styled-components';

export const SignInWrapper = styled.div`
  background: var(--base-03, #1c1c1c);
  color: var(--content-01, #c5bfbf);
  border-radius: 32px;
  max-width: 48rem;
  margin: 4.5rem auto;
  padding: 2rem;
  font-family: var(--text-family-mode-family, 'Nunito Sans');

  @media (max-width: 1712px) {
    margin: 3rem auto;
  }

  @media (max-width: 529px) {
    margin: 3rem 1rem;
  }
`;
