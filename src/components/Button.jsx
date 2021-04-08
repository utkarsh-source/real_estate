import styled from 'styled-components'

const Button = styled.button`
    padding: 1rem 1.5rem;
    width: max-content;
    background-color: black;
    color: white;
    border: none;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.5rem;
    transition: ${({ primary }) => primary ? '0.5s' : ''} ;
    @media screen and (max-width: 768px){
        display : ${({ primary }) => primary ? 'none' : 'inline-block'} 
    }
    &:hover{
        transform: ${({ primary }) => primary ? 'translateX(5px)' : ''} 
    }
    &:hover .arw{
        transform: scaleX(1.5)
    }
    
`;

export default Button