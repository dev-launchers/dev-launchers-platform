import styled from 'styled-components';

export const Link = styled.a`
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
  color: ${({ theme }) => theme.colors.LIGHT_BLUE};

  &:visited {
    width: 30px;
    height: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.LIGHT_BLUE_500};
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  &:hover {
    width: 31px;
    height: 20px;
    font-weight: 600;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.LIGHT_BLUE_200};
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  &:focus {
    width: 30px;
    height: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.LIGHT_BLUE_200};
    flex: none;
    order: 0;
    flex-grow: 0;
    border: solid 2px ${({ theme }) => theme.colors.BLUE_600};
  }

  &:active {
    width: 30px;
    height: 20px;
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.BLUE_100};
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
    color: ${({ theme }) => theme.colors.GREYSCALE_GREY};
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;
