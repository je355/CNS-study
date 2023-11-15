import styled from "styled-components"

export const MainContanier = styled.div`
    margin: 0 auto;
    width: 50%;
    margin-top: 5rem;
`;

export const Title = styled. div`
    font-size: 2rem;
    font-weight: 700;
`;

export const Date = styled.div`
    font-size: 1rem;
    color: #aaa;
`;

export const TitleWrap = styled.div`;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Context = styled.div`
    margin-top: 1rem;
    font-size: 1.25rem;
`;

export const BackButton = styled.button`
    padding: 1rem 2rem;
    margin-top: 3rem;
    font-size: 1rem;
    letter-spacing 0.2rem;
    border: none;
    border-radius: 10px;
    background-color: #1556f7;
    color: #fff;

    &:hover{
        background-color: #1f59ea;
    }

    &:active{
        background-color: #1b52da;
    }
`;