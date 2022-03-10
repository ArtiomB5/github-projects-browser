import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #485767;
    margin: 5px;
    padding: 5px;
    border-radius: 15px;
`;

export const IMG = styled.img`
    height: 80px;
    width: auto;
    border-radius: 50%;
`;

export const Data = styled.div`
    width: calc(100vw - 100px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`