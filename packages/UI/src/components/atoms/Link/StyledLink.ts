import styled from 'styled-components';

export const Link = styled.link<LinkProps>`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.fonts.ACCENT_4};

  &:visited {
    width: 30px;
    height: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.fonts.LightBlue500};
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  &:hover {
    width: 31px;
    height: 20px;
    font-weight: 600;
    line-height: 20px;
    color: ${({ theme }) => theme.fonts.LightBlue200};
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  &:focus {
    width: 30px;
    height: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.fonts.LightBlue200};
    flex: none;
    order: 0;
    flex-grow: 0;
    border: solid 2px ${({ theme }) => theme.fonts.Blue600};
  }

  &:active {
    width: 30px;
    height: 20px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.fonts.Blue100};
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  &:disabled {
    width: 29px;
    height: 20px;
    font-style: italic;
    font-weight: 300;
    line-height: 20px;
    color: ${({ theme }) => theme.fonts.GreyScale};
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;
