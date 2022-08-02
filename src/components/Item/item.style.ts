import styled from "styled-components";


export const ItemStyles = styled.div`
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    width: 90%
    border: 2px solid blue;
    height: 100%;
    background-color:silver;
    border-radius:20px 20px 20px 20px;

    button{
        border-radius: 0 0 20px 20px;
        background-color: grey;
    }
    img {
        height: 250px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }
    div{
        font-family: Arial,Helvetica, sans-serif;
        padding: 0.5rem;
        height: 100%;
    }
    
`;