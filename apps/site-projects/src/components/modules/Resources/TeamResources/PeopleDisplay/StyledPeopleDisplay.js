import styled from "styled-components";

export const PeopleDisplayContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    flex-shrink: 0;     
    max-width: 400px;
    width: 100%;

    /* border-radius: 16px; */
    background: #FFF;

    box-shadow: 0px 10px 18px 10px rgba(127, 126, 127, 0.25);

    /* overflow: hidden; */

    > .sides {
        padding: 43px 26px;
        width: 50%;
        display: flex;
    }
    
    > .pfp {
        justify-content: center;

        > img {
            width: 128px;
            height: 128px;
            border-radius: 100%;
        }
    }
    
    > .userInfo {
        flex-direction: column;

        font-family: Nunito Sans;
        font-size: 14px;
        font-style: normal;
        line-height: normal;
        letter-spacing: 1.12px;
        font-feature-settings: 'clig' off, 'liga' off;
        color: #000;

        > h3 {
            /* Default/H3 */
            font-family: Abel;
            font-size: 32px;
            font-weight: 400;
            margin: 0;
        }

        > span {
            color: rgba(0, 0, 0, 0.60);
            font-weight: 400;
            text-transform: uppercase;
        }

        > p {
            font-weight: 300;
        }

        > a {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;;
            cursor: pointer;
            border: none;
            border-radius: 4px;
            background: #333;
            color: #FFF;
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 0.64px;
            text-transform: capitalize;
        }
    }
`

export const Icon = styled.svg`
  height: 23px;
  width: 23px;
  margin-right: 8px;
`;