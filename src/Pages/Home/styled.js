import styled from 'styled-components';

export const HomeContainer = styled.div`
    heigth: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    margin: 15rem 0 auto; 
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    height: 1.5rem;
    border: 1px solid #000;
    margin: 15rem 0 auto;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
`;

export const ErrorMsg = styled.span`
    font-size: 1rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`;