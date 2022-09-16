import { Theme } from "../../../styles/theme";
import styled, { css } from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
`;
export const Button = styled.button<{ collapsed: boolean; transparent?: boolean, background?: keyof Theme["colors"] }>`
  background-color: ${({ theme, transparent, background }) =>
    transparent ? 'transparent' : background ? theme.colors[background] : theme.colors.CoolGrey};
  color: ${({ theme, transparent }) =>
    transparent ? 'inherit' : theme?.colors?.Black};

  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  & svg {
    height: 40px;
    width: 40px;
    transition: transform 300ms ease-in;
    ${({ collapsed }) =>
    !collapsed &&
    css`
        transform: rotate(180deg);
      `};
  }

  & span {
    font-family: ${({ theme }) => theme?.fonts?.normal};
    font-style: normal;
    font-weight: 600;
    font-size: 21.3333px;
    line-height: 20px;
  }
`;
export const Content = styled.div < {
  collapsed: boolean,
  elemHeight: number,
  transparent?: boolean,
  background?: keyof Theme["colors"],
  ref?: React.Ref<HTMLDivElement>
}> `
  height: ${({ collapsed, elemHeight }) =>
    collapsed ? '0' : `${elemHeight}px`};
  padding: ${({ collapsed }) => (collapsed ? '0 18px' : '10px 18px')};
  overflow: hidden;
  color: ${({ theme, transparent }) =>
    transparent ? 'inherit' : theme?.colors?.Black};
  background-color: ${({ theme, transparent, background }) =>
    transparent ? 'transparent' : background ? theme.colors[background] : theme?.colors?.White};
  transform-origin: top;
  transition: all 300ms 100ms ease-out;
`;