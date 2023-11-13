import styled from "styled-components"

export const ErrorText = styled.div`
    color: #000;

    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;

    display: flex;
    justify-content: center;

    margin-top : 15rem;
`;

export const Error404 = styled.div`
    color: #1556f7;
`;

export const NotFoundText = styled.div`
    color: #000;

    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    display: flex;
    justify-content: center;


    marign-top: 5rem;
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

export const BackButton1 = styled.div`
    display: flex;
    justify-content: center;
`;

export const SadImage = styled.img`
    width: 120px;
    height: 120px
`;

export const SadImage1 = styled.div`
    display: flex;
    justify-content: center;
`;